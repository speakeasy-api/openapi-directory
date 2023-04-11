import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationAggregatedStatus } from "./applicationaggregatedstatus";
/**
 * Success
 */
export declare class Application extends SpeakeasyBase {
    applicationAggregatedStatus?: ApplicationAggregatedStatus;
    applicationID?: string;
    arn?: string;
    creationDateTime?: string;
    description?: string;
    isArchived?: boolean;
    lastModifiedDateTime?: string;
    name?: string;
    tags?: Record<string, string>;
    waveID?: string;
}
