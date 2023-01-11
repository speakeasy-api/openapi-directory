import { SpeakeasyBase } from "../../../internal/utils";
import { SshKey } from "./sshkey";
import { User } from "./user";
export declare class SshKeyResponse extends SpeakeasyBase {
    data?: SshKey;
    included?: User[];
    responseStatus?: number;
}
