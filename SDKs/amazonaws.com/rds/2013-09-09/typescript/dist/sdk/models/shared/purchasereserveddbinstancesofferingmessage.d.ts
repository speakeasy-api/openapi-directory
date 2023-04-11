import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class PurchaseReservedDBInstancesOfferingMessage extends SpeakeasyBase {
    dbInstanceCount?: number;
    reservedDBInstanceId?: string;
    reservedDBInstancesOfferingId: string;
    tags?: TagList[];
}
