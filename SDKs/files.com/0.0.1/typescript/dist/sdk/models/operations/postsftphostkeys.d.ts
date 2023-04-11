import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSftpHostKeysRequestBody extends SpeakeasyBase {
    /**
     * The friendly name of this SFTP Host Key.
     */
    name?: string;
    /**
     * The private key data.
     */
    privateKey?: string;
}
export declare class PostSftpHostKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The SftpHostKeys object.
     */
    sftpHostKeyEntity?: shared.SftpHostKeyEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
