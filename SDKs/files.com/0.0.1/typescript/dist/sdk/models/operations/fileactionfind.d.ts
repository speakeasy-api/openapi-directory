import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FileActionFindRequest extends SpeakeasyBase {
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
export declare class FileActionFindResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FileActions object.
     */
    fileEntity?: shared.FileEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
