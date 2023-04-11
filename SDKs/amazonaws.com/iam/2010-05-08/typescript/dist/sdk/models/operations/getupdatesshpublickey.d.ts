import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateSSHPublicKeyActionEnum {
    UpdateSSHPublicKey = "UpdateSSHPublicKey"
}
/**
 * The status to assign to the SSH public key. <code>Active</code> means that the key can be used for authentication with an CodeCommit repository. <code>Inactive</code> means that the key cannot be used.
 */
export declare enum GETUpdateSSHPublicKeyStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
export declare enum GETUpdateSSHPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETUpdateSSHPublicKeyRequest extends SpeakeasyBase {
    action: GETUpdateSSHPublicKeyActionEnum;
    /**
     * <p>The unique identifier for the SSH public key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
     */
    sshPublicKeyId: string;
    /**
     * The status to assign to the SSH public key. <code>Active</code> means that the key can be used for authentication with an CodeCommit repository. <code>Inactive</code> means that the key cannot be used.
     */
    status: GETUpdateSSHPublicKeyStatusEnum;
    /**
     * <p>The name of the IAM user associated with the SSH public key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    userName: string;
    version: GETUpdateSSHPublicKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateSSHPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
