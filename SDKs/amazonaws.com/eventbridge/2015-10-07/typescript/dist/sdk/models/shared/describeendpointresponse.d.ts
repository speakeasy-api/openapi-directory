import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointEventBus } from "./endpointeventbus";
import { EndpointStateEnum } from "./endpointstateenum";
import { ReplicationConfig } from "./replicationconfig";
import { RoutingConfig } from "./routingconfig";
/**
 * Success
 */
export declare class DescribeEndpointResponse extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    description?: string;
    endpointId?: string;
    endpointUrl?: string;
    eventBuses?: EndpointEventBus[];
    lastModifiedTime?: Date;
    name?: string;
    replicationConfig?: ReplicationConfig;
    roleArn?: string;
    routingConfig?: RoutingConfig;
    state?: EndpointStateEnum;
    stateReason?: string;
}
