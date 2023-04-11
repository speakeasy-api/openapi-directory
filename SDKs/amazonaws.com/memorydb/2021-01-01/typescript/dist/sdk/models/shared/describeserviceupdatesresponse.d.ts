import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdate } from "./serviceupdate";
/**
 * Success
 */
export declare class DescribeServiceUpdatesResponse extends SpeakeasyBase {
    nextToken?: string;
    serviceUpdates?: ServiceUpdate[];
}
