import { SpeakeasyBase } from "../../../internal/utils";
import { AgentStatusEnum } from "./agentstatusenum";
import { AuditResultsEnum } from "./auditresultsenum";
import { ConnectionDetails } from "./connectiondetails";
import { RangedConnectionDetails } from "./rangedconnectiondetails";
/**
 * Information about AwsGroundStationAgentEndpoint.
 */
export declare class AwsGroundStationAgentEndpoint extends SpeakeasyBase {
    agentStatus?: AgentStatusEnum;
    auditResults?: AuditResultsEnum;
    egressAddress: ConnectionDetails;
    ingressAddress: RangedConnectionDetails;
    name: string;
}
