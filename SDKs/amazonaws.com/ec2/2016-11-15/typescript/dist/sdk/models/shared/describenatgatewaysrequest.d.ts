import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeNatGatewaysRequest extends SpeakeasyBase {
    dryRun?: boolean;
    filter?: FilterList[];
    maxResults?: number;
    natGatewayIds?: string[];
    nextToken?: string;
}
