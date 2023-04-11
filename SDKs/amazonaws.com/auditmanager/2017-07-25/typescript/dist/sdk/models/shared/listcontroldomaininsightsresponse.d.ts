import { SpeakeasyBase } from "../../../internal/utils";
import { ControlDomainInsights } from "./controldomaininsights";
/**
 * Success
 */
export declare class ListControlDomainInsightsResponse extends SpeakeasyBase {
    controlDomainInsights?: ControlDomainInsights[];
    nextToken?: string;
}
