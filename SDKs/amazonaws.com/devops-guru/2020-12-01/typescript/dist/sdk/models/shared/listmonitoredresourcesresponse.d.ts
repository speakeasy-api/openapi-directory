import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResourceIdentifier } from "./monitoredresourceidentifier";
/**
 * Success
 */
export declare class ListMonitoredResourcesResponse extends SpeakeasyBase {
    monitoredResourceIdentifiers: MonitoredResourceIdentifier[];
    nextToken?: string;
}
