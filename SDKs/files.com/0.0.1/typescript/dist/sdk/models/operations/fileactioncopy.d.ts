import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FileActionCopyRequestBody extends SpeakeasyBase {
    /**
     * Copy destination path.
     */
    destination: string;
    /**
     * Copy structure only?
     */
    structure?: boolean;
}
export declare class FileActionCopyRequest extends SpeakeasyBase {
    requestBody: FileActionCopyRequestBody;
    /**
     * Path to operate on.
     */
    path: string;
}
export declare class FileActionCopyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FileActions object.
     */
    fileActionEntity?: shared.FileActionEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
