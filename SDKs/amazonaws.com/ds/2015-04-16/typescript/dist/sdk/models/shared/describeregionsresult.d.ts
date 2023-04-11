import { SpeakeasyBase } from "../../../internal/utils";
import { RegionDescription } from "./regiondescription";
/**
 * Success
 */
export declare class DescribeRegionsResult extends SpeakeasyBase {
    nextToken?: string;
    regionsDescription?: RegionDescription[];
}
