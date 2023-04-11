import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompressFilesCompressFilesRequestBody extends SpeakeasyBase {
    /**
     * Name of the zip archive to create. If left blank, current date will be used.
     */
    archiveName?: string;
    /**
     * Resource identifier of the folder where zip archive should be created.
     */
    parentResource?: string;
    /**
     * Resource identifiers for file(s)/folder(s) to include in new zip file
     */
    resources: string[];
}
export declare class CompressFilesRequest extends SpeakeasyBase {
    requestBody?: CompressFilesCompressFilesRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
}
export declare class CompressFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
