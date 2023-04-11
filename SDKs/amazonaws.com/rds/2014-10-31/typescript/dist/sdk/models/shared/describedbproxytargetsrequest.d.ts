import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBProxyTargetsRequest extends SpeakeasyBase {
    dbProxyName: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    targetGroupName?: string;
}
