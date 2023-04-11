import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FileActionBeginUploadRequestBody extends SpeakeasyBase {
    /**
     * Create parent directories if they do not exist?
     */
    mkdirParents?: boolean;
    /**
     * Part if uploading a part.
     */
    part?: number;
    /**
     * How many parts to fetch?
     */
    parts?: number;
    ref?: string;
    /**
     * File byte offset to restart from.
     */
    restart?: number;
    /**
     * Total bytes of file being uploaded (include bytes being retained if appending/restarting).
     */
    size?: number;
    /**
     * Allow file rename instead of overwrite?
     */
    withRename?: boolean;
}
export declare class FileActionBeginUploadRequest extends SpeakeasyBase {
    requestBody?: FileActionBeginUploadRequestBody;
    /**
     * Path to operate on.
     */
    path: string;
}
export declare class FileActionBeginUploadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FileActions object.
     */
    fileUploadPartEntities?: shared.FileUploadPartEntity[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
