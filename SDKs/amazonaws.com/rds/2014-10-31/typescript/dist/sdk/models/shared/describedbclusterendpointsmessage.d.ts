import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBClusterEndpointsMessage extends SpeakeasyBase {
    dbClusterEndpointIdentifier?: string;
    dbClusterIdentifier?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
