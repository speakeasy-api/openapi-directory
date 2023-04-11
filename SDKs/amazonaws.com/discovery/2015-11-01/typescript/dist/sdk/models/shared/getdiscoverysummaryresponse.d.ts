import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerAgentInfo } from "./customeragentinfo";
import { CustomerAgentlessCollectorInfo } from "./customeragentlesscollectorinfo";
import { CustomerConnectorInfo } from "./customerconnectorinfo";
import { CustomerMeCollectorInfo } from "./customermecollectorinfo";
/**
 * Success
 */
export declare class GetDiscoverySummaryResponse extends SpeakeasyBase {
    agentSummary?: CustomerAgentInfo;
    agentlessCollectorSummary?: CustomerAgentlessCollectorInfo;
    applications?: number;
    connectorSummary?: CustomerConnectorInfo;
    meCollectorSummary?: CustomerMeCollectorInfo;
    servers?: number;
    serversMappedToApplications?: number;
    serversMappedtoTags?: number;
}
