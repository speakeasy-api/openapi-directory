import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a Region.
 */
export declare class DescribeRegionsResultRegions extends SpeakeasyBase {
    endpoint?: string;
    optInStatus?: string;
    regionName?: string;
}
/**
 * Success
 */
export declare class DescribeRegionsResult extends SpeakeasyBase {
    regions?: DescribeRegionsResultRegions[];
}
