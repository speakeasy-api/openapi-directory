import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSftpHostKeysIdRequest extends SpeakeasyBase {
    /**
     * Sftp Host Key ID.
     */
    id: number;
}
export declare class GetSftpHostKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The SftpHostKeys object.
     */
    sftpHostKeyEntity?: shared.SftpHostKeyEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
