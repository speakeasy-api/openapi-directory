import { SpeakeasyBase } from "../../../internal/utils";
import { PartnerEventSource } from "./partnereventsource";
/**
 * Success
 */
export declare class ListPartnerEventSourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    partnerEventSources?: PartnerEventSource[];
}
