import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointDescription } from "./endpointdescription";
/**
 * Success
 */
export declare class AddEndpointsResponse extends SpeakeasyBase {
    endpointDescriptions?: EndpointDescription[];
    endpointGroupArn?: string;
}
