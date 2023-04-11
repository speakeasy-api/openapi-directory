import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointEventBus } from "./endpointeventbus";
import { ReplicationConfig } from "./replicationconfig";
import { RoutingConfig } from "./routingconfig";
export declare class UpdateEndpointRequest extends SpeakeasyBase {
    description?: string;
    eventBuses?: EndpointEventBus[];
    name: string;
    replicationConfig?: ReplicationConfig;
    roleArn?: string;
    routingConfig?: RoutingConfig;
}
