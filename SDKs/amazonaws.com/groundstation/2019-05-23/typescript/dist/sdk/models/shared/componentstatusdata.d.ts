import { SpeakeasyBase } from "../../../internal/utils";
import { AgentStatusEnum } from "./agentstatusenum";
import { ComponentTypeEnum } from "./componenttypeenum";
/**
 * Data on the status of agent components.
 */
export declare class ComponentStatusData extends SpeakeasyBase {
    bytesReceived?: number;
    bytesSent?: number;
    capabilityArn: string;
    componentType: ComponentTypeEnum;
    dataflowId: string;
    packetsDropped?: number;
    status: AgentStatusEnum;
}
