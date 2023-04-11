import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRetargetingIdRequest extends SpeakeasyBase {
    /**
     * The id of the retargeting script
     */
    id: number;
}
export declare class GetRetargetingIdResponse extends SpeakeasyBase {
    apiCoreDtoRetargetingRetargetingScript?: shared.ApiCoreDtoRetargetingRetargetingScript;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
