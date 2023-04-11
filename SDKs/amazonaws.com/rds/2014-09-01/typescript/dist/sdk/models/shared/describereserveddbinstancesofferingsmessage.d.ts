import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeReservedDBInstancesOfferingsMessage extends SpeakeasyBase {
    dbInstanceClass?: string;
    duration?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    multiAZ?: boolean;
    offeringType?: string;
    productDescription?: string;
    reservedDBInstancesOfferingId?: string;
}
