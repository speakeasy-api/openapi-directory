import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostFilesPathRequestBody extends SpeakeasyBase {
    /**
     * The action to perform.  Can be `append`, `attachment`, `end`, `upload`, `put`, or may not exist
     */
    action?: string;
    /**
     * etag identifier.
     */
    etagsEtag: string[];
    /**
     * Part number.
     */
    etagsPart: number[];
    /**
     * Length of file.
     */
    length?: number;
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
    /**
     * User provided modification time.
     */
    providedMtime?: Date;
    ref?: string;
    /**
     * File byte offset to restart from.
     */
    restart?: number;
    /**
     * Size of file.
     */
    size?: number;
    /**
     * If copying folder, copy just the structure?
     */
    structure?: string;
    /**
     * Allow file rename instead of overwrite?
     */
    withRename?: boolean;
}
export declare class PostFilesPathRequest extends SpeakeasyBase {
    requestBody?: PostFilesPathRequestBody;
    /**
     * Path to operate on.
     */
    path: string;
}
export declare class PostFilesPathResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Files object.
     */
    fileEntity?: shared.FileEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
