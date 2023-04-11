import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateResourceByIdUpdateResourceByIdRequestBody extends SpeakeasyBase {
    /**
     * The new name for the resource (file or folder).
     */
    name?: string;
}
export declare class UpdateResourceByIdRequest extends SpeakeasyBase {
    requestBody?: UpdateResourceByIdUpdateResourceByIdRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID number of the resource
     */
    id: number;
}
export declare class UpdateResourceByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
