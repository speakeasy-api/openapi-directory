import { SpeakeasyBase } from "../../../internal/utils";
export declare class FileDownloadPathParams extends SpeakeasyBase {
    fileId: number;
}
export declare class FileDownloadRequest extends SpeakeasyBase {
    pathParams: FileDownloadPathParams;
}
export declare class FileDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
