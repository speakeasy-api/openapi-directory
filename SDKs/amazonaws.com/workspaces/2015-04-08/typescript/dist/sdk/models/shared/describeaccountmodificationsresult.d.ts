import { SpeakeasyBase } from "../../../internal/utils";
import { AccountModification } from "./accountmodification";
/**
 * Success
 */
export declare class DescribeAccountModificationsResult extends SpeakeasyBase {
    accountModifications?: AccountModification[];
    nextToken?: string;
}
