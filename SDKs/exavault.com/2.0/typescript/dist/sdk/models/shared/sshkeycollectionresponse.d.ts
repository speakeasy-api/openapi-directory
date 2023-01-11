import { SpeakeasyBase } from "../../../internal/utils";
import { SshKey } from "./sshkey";
import { User } from "./user";
export declare class SshKeyCollectionResponse extends SpeakeasyBase {
    data?: SshKey[];
    included?: User[];
    responseStatus?: number;
    returnedResults?: number;
    totalResults?: number;
}
