import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointEventBus } from "./endpointeventbus";
import { EndpointStateEnum } from "./endpointstateenum";
import { ReplicationConfig } from "./replicationconfig";
import { RoutingConfig } from "./routingconfig";
/**
 * Success
 */
export declare class UpdateEndpointResponse extends SpeakeasyBase {
    arn?: string;
    endpointId?: string;
    endpointUrl?: string;
    eventBuses?: EndpointEventBus[];
    name?: string;
    replicationConfig?: ReplicationConfig;
    roleArn?: string;
    routingConfig?: RoutingConfig;
    state?: EndpointStateEnum;
}
