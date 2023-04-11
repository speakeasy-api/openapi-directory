import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
/**
 * Success
 */
export declare class DescribeEventConfigurationsResponse extends SpeakeasyBase {
    creationDate?: Date;
    eventConfigurations?: Record<string, Configuration>;
    lastModifiedDate?: Date;
}
