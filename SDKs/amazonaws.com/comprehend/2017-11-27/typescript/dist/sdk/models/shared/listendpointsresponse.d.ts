import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointProperties } from "./endpointproperties";
/**
 * Success
 */
export declare class ListEndpointsResponse extends SpeakeasyBase {
    endpointPropertiesList?: EndpointProperties[];
    nextToken?: string;
}
