import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchSpacesIdLegalRequest extends SpeakeasyBase {
    /**
     * Legal information to modify
     */
    legal: shared.Legal;
    /**
     * Id of the space
     */
    id: string;
}
export declare class PatchSpacesIdLegalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
