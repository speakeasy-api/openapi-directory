import { SpeakeasyBase } from "../../../internal/utils";
import { CollectorHealthEnum } from "./collectorhealthenum";
import { ConfigurationSummary } from "./configurationsummary";
/**
 *  Process data collector that runs in the environment that you specify.
 */
export declare class Collector extends SpeakeasyBase {
    collectorHealth?: CollectorHealthEnum;
    collectorId?: string;
    collectorVersion?: string;
    configurationSummary?: ConfigurationSummary;
    hostName?: string;
    ipAddress?: string;
    lastActivityTimeStamp?: string;
    registeredTimeStamp?: string;
}
