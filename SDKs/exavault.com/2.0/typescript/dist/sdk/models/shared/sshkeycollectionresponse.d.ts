import { SpeakeasyBase } from "../../../internal/utils";
import { SSHKey } from "./sshkey";
import { User } from "./user";
/**
 * Successful Operation
 */
export declare class SSHKeyCollectionResponse extends SpeakeasyBase {
    data?: SSHKey[];
    included?: User[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
    /**
     * Number of returned results.
     */
    returnedResults?: number;
    /**
     * Total results found.
     */
    totalResults?: number;
}
