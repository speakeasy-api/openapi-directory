import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchFilesPathRequestBody extends SpeakeasyBase {
    /**
     * Priority/Bookmark color of file.
     */
    priorityColor?: string;
    /**
     * Modified time of file.
     */
    providedMtime?: Date;
}
export declare class PatchFilesPathRequest extends SpeakeasyBase {
    requestBody?: PatchFilesPathRequestBody;
    /**
     * Path to operate on.
     */
    path: string;
}
export declare class PatchFilesPathResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Files object.
     */
    fileEntity?: shared.FileEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
