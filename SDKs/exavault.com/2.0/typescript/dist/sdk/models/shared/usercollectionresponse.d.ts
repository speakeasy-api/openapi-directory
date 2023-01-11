import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class UserCollectionResponse extends SpeakeasyBase {
    data?: User[];
    included?: any[];
    responseStatus?: number;
    returnedResults?: number;
    totalResults?: number;
}
