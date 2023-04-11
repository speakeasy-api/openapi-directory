import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FileActionMoveRequestBody extends SpeakeasyBase {
    /**
     * Move destination path.
     */
    destination: string;
}
export declare class FileActionMoveRequest extends SpeakeasyBase {
    requestBody: FileActionMoveRequestBody;
    /**
     * Path to operate on.
     */
    path: string;
}
export declare class FileActionMoveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FileActions object.
     */
    fileActionEntity?: shared.FileActionEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
