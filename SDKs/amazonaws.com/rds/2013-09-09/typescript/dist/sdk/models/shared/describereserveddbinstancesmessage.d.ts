import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeReservedDBInstancesMessage extends SpeakeasyBase {
    dbInstanceClass?: string;
    duration?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    multiAZ?: boolean;
    offeringType?: string;
    productDescription?: string;
    reservedDBInstanceId?: string;
    reservedDBInstancesOfferingId?: string;
}
