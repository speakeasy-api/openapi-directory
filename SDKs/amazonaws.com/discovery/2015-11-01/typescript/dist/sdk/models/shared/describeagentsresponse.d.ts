import { SpeakeasyBase } from "../../../internal/utils";
import { AgentInfo } from "./agentinfo";
/**
 * Success
 */
export declare class DescribeAgentsResponse extends SpeakeasyBase {
    agentsInfo?: AgentInfo[];
    nextToken?: string;
}
