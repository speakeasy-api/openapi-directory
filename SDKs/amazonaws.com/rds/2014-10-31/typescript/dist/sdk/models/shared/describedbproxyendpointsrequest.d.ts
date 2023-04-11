import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBProxyEndpointsRequest extends SpeakeasyBase {
    dbProxyEndpointName?: string;
    dbProxyName?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
