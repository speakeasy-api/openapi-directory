import { SpeakeasyBase } from "../../../internal/utils";
import { SSHKey } from "./sshkey";
import { User } from "./user";
/**
 * Successful Operation
 */
export declare class SSHKeyResponse extends SpeakeasyBase {
    /**
     * Object representing an SSH Key associated with a user.
     */
    data?: SSHKey;
    included?: User[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
}
