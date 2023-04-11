import { SpeakeasyBase } from "../../../internal/utils";
import { SSHPublicKey } from "./sshpublickey";
/**
 * Contains the response to a successful <a>UploadSSHPublicKey</a> request.
 */
export declare class UploadSSHPublicKeyResponse extends SpeakeasyBase {
    sshPublicKey?: SSHPublicKey;
}
