import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityFindingIdentifier } from "./awssecurityfindingidentifier";
import { BatchUpdateFindingsUnprocessedFinding } from "./batchupdatefindingsunprocessedfinding";
/**
 * Success
 */
export declare class BatchUpdateFindingsResponse extends SpeakeasyBase {
    processedFindings: AwsSecurityFindingIdentifier[];
    unprocessedFindings: BatchUpdateFindingsUnprocessedFinding[];
}
