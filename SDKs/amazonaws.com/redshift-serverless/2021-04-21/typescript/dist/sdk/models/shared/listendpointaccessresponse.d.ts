import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointAccess } from "./endpointaccess";
/**
 * Success
 */
export declare class ListEndpointAccessResponse extends SpeakeasyBase {
    endpoints: EndpointAccess[];
    nextToken?: string;
}
