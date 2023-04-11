import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFilesPathRequest extends SpeakeasyBase {
    /**
     * Path to operate on.
     */
    path: string;
    /**
     * If true, will recursively delete folers.  Otherwise, will error on non-empty folders.
     */
    recursive?: boolean;
}
export declare class DeleteFilesPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
