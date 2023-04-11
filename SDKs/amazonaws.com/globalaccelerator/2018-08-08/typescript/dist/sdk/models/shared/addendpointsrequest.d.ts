import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointConfiguration } from "./endpointconfiguration";
export declare class AddEndpointsRequest extends SpeakeasyBase {
    endpointConfigurations: EndpointConfiguration[];
    endpointGroupArn: string;
}
