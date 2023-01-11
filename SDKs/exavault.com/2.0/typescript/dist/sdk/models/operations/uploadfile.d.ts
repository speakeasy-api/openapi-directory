import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadFileQueryParams extends SpeakeasyBase {
    allowOverwrite?: boolean;
    fileSize: number;
    path: string;
    resume?: boolean;
}
export declare class UploadFileHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
    offsetBytes?: number;
}
export declare class UploadFileRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadFileRequestBody extends SpeakeasyBase {
    file?: UploadFileRequestBodyFile;
}
export declare class UploadFileRequest extends SpeakeasyBase {
    queryParams: UploadFileQueryParams;
    headers: UploadFileHeaders;
    request?: UploadFileRequestBody;
}
export declare class UploadFileResponse extends SpeakeasyBase {
    contentType: string;
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
}
