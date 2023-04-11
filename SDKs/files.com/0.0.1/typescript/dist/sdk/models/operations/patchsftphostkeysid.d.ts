import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchSftpHostKeysIdRequestBody extends SpeakeasyBase {
    /**
     * The friendly name of this SFTP Host Key.
     */
    name?: string;
    /**
     * The private key data.
     */
    privateKey?: string;
}
export declare class PatchSftpHostKeysIdRequest extends SpeakeasyBase {
    requestBody?: PatchSftpHostKeysIdRequestBody;
    /**
     * Sftp Host Key ID.
     */
    id: number;
}
export declare class PatchSftpHostKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The SftpHostKeys object.
     */
    sftpHostKeyEntity?: shared.SftpHostKeyEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
