import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Successful Operation
 */
export declare class UserCollectionResponse extends SpeakeasyBase {
    data?: User[];
    included?: any[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
    /**
     * Number of results returned.
     */
    returnedResults?: number;
    /**
     * Total results found.
     */
    totalResults?: number;
}
