import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationEvent } from "./configurationevent";
/**
 * Success
 */
export declare class ListConfigurationHistoryResponse extends SpeakeasyBase {
    eventList?: ConfigurationEvent[];
    nextToken?: string;
}
