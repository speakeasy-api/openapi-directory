import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddFolderAddFolderRequestBody extends SpeakeasyBase {
    /**
     * Name of the folder to create. Required if **path** is not used
     */
    name?: string;
    /**
     * Resource identifier where to create a folder. Required if **path** is not used
     */
    parentResource?: string;
    /**
     * Fully-qualified path to the new folder including folder's name
     */
    path?: string;
}
export declare class AddFolderRequest extends SpeakeasyBase {
    requestBody?: AddFolderAddFolderRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
}
export declare class AddFolderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
