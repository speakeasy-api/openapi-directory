import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSftpHostKeysIdRequest extends SpeakeasyBase {
    /**
     * Sftp Host Key ID.
     */
    id: number;
}
export declare class DeleteSftpHostKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
