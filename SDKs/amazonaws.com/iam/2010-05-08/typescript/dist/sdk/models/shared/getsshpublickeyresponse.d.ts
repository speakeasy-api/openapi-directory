import { SpeakeasyBase } from "../../../internal/utils";
import { SSHPublicKey } from "./sshpublickey";
/**
 * Contains the response to a successful <a>GetSSHPublicKey</a> request.
 */
export declare class GetSSHPublicKeyResponse extends SpeakeasyBase {
    sshPublicKey?: SSHPublicKey;
}
