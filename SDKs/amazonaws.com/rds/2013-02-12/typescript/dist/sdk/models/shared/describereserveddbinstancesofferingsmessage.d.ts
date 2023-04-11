import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeReservedDBInstancesOfferingsMessage extends SpeakeasyBase {
    dbInstanceClass?: string;
    duration?: string;
    marker?: string;
    maxRecords?: number;
    multiAZ?: boolean;
    offeringType?: string;
    productDescription?: string;
    reservedDBInstancesOfferingId?: string;
}
