import { SpeakeasyBase } from "../../../internal/utils";
import { AgentStatusEnum } from "./agentstatusenum";
/**
 * Represents a single entry in a list (or array) of DataSync agents when you call the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation.
 */
export declare class AgentListEntry extends SpeakeasyBase {
    agentArn?: string;
    name?: string;
    status?: AgentStatusEnum;
}
