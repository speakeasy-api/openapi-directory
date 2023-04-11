import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteSSHPublicKeyActionEnum {
    DeleteSSHPublicKey = "DeleteSSHPublicKey"
}
export declare enum GETDeleteSSHPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeleteSSHPublicKeyRequest extends SpeakeasyBase {
    action: GETDeleteSSHPublicKeyActionEnum;
    /**
     * <p>The unique identifier for the SSH public key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
     */
    sshPublicKeyId: string;
    /**
     * <p>The name of the IAM user associated with the SSH public key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    userName: string;
    version: GETDeleteSSHPublicKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteSSHPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
