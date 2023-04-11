import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
/**
 * Success
 */
export declare class DescribeApplicationsResult extends SpeakeasyBase {
    applications?: Application[];
    nextToken?: string;
}
