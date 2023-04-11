import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Status to add or replace
 */
export declare class PostSpacesIdStatusRequestBody extends SpeakeasyBase {
    code: string;
    comment?: string;
    label: string;
}
export declare class PostSpacesIdStatusRequest extends SpeakeasyBase {
    /**
     * Status to add or replace
     */
    requestBody: PostSpacesIdStatusRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
export declare class PostSpacesIdStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
