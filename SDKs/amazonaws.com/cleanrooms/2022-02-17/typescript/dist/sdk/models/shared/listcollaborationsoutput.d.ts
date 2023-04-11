import { SpeakeasyBase } from "../../../internal/utils";
import { CollaborationSummary } from "./collaborationsummary";
/**
 * Success
 */
export declare class ListCollaborationsOutput extends SpeakeasyBase {
    collaborationList: CollaborationSummary[];
    nextToken?: string;
}
