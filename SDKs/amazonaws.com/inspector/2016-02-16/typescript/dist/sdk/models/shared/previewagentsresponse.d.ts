import { SpeakeasyBase } from "../../../internal/utils";
import { AgentPreview } from "./agentpreview";
/**
 * Success
 */
export declare class PreviewAgentsResponse extends SpeakeasyBase {
    agentPreviews: AgentPreview[];
    nextToken?: string;
}
