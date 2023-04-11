import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FileDownloadRequest extends SpeakeasyBase {
    /**
     * Can be blank, `redirect` or `stat`.  If set to `stat`, we will return file information but without a download URL, and without logging a download.  If set to `redirect` we will serve a 302 redirect directly to the file.  This is used for integrations with Zapier, and is not recommended for most integrations.
     */
    action?: string;
    /**
     * Path to operate on.
     */
    path: string;
    /**
     * Request a preview size.  Can be `small` (default), `large`, `xlarge`, or `pdf`.
     */
    previewSize?: string;
    /**
     * Include file preview information?
     */
    withPreviews?: boolean;
    /**
     * Include file priority color information?
     */
    withPriorityColor?: boolean;
}
export declare class FileDownloadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Files object.
     */
    fileEntity?: shared.FileEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
