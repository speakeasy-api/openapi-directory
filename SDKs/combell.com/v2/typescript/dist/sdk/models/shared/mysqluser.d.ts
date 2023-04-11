import { SpeakeasyBase } from "../../../internal/utils";
import { UserRightsEnum } from "./userrightsenum";
export declare class MySqlUser extends SpeakeasyBase {
    /**
     * User status
     */
    enabled?: boolean;
    /**
     * User name
     */
    name?: string;
    /**
     * User rights
     */
    rights?: UserRightsEnum;
}
