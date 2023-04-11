import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtractFilesExtractFilesRequestBody extends SpeakeasyBase {
    /**
     * Resource identifier for folder files should be extracted to.
     */
    parentResource: string;
    /**
     * Resource identifier of zip archive to be extracted.
     */
    resource: string;
}
export declare class ExtractFilesRequest extends SpeakeasyBase {
    requestBody?: ExtractFilesExtractFilesRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
}
export declare class ExtractFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    resourceCollectionResponse?: shared.ResourceCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
