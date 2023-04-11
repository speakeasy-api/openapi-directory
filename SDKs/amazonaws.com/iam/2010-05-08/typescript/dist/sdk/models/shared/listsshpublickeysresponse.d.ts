import { SpeakeasyBase } from "../../../internal/utils";
import { SSHPublicKeyMetadata } from "./sshpublickeymetadata";
/**
 * Contains the response to a successful <a>ListSSHPublicKeys</a> request.
 */
export declare class ListSSHPublicKeysResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    sshPublicKeys?: SSHPublicKeyMetadata[];
}
