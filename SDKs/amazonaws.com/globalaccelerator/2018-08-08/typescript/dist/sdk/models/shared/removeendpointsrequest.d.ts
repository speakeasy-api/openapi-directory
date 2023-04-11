import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointIdentifier } from "./endpointidentifier";
export declare class RemoveEndpointsRequest extends SpeakeasyBase {
    endpointGroupArn: string;
    endpointIdentifiers: EndpointIdentifier[];
}
