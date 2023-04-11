import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeReservedDBInstancesMessage extends SpeakeasyBase {
    dbInstanceClass?: string;
    duration?: string;
    marker?: string;
    maxRecords?: number;
    multiAZ?: boolean;
    offeringType?: string;
    productDescription?: string;
    reservedDBInstanceId?: string;
    reservedDBInstancesOfferingId?: string;
}
