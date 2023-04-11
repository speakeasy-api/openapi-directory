import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetargetingPostFormRequest extends SpeakeasyBase {
    /**
     * The body of the retargeting script
     */
    apiCoreDtoRetargetingRetargetingScript: shared.ApiCoreDtoRetargetingRetargetingScript;
    /**
     * The id of the retargeting script
     */
    id: number;
}
export declare class RetargetingPostFormResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
