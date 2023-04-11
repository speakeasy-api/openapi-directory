import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointEventBus } from "./endpointeventbus";
import { EndpointStateEnum } from "./endpointstateenum";
import { ReplicationConfig } from "./replicationconfig";
import { RoutingConfig } from "./routingconfig";
/**
 * A global endpoint used to improve your application's availability by making it regional-fault tolerant. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide.
 */
export declare class Endpoint extends SpeakeasyBase {
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
