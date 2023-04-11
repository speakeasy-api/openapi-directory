import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointSummary } from "./endpointsummary";
/**
 * Success
 */
export declare class ListEndpointsOutput extends SpeakeasyBase {
    endpoints: EndpointSummary[];
    nextToken?: string;
}
