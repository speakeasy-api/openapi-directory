import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPreviewFinding } from "./accesspreviewfinding";
/**
 * Success
 */
export declare class ListAccessPreviewFindingsResponse extends SpeakeasyBase {
    findings: AccessPreviewFinding[];
    nextToken?: string;
}
