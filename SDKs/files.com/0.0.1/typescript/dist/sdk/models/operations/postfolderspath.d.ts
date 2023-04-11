import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostFoldersPathRequestBody extends SpeakeasyBase {
    /**
     * Create parent directories if they do not exist?
     */
    mkdirParents?: boolean;
    /**
     * User provided modification time.
     */
    providedMtime?: Date;
}
export declare class PostFoldersPathRequest extends SpeakeasyBase {
    requestBody?: PostFoldersPathRequestBody;
    /**
     * Path to operate on.
     */
    path: string;
}
export declare class PostFoldersPathResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Folders object.
     */
    fileEntity?: shared.FileEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
