import { SpeakeasyBase } from "../../../internal/utils";
import { FindingProviderSeverity } from "./findingproviderseverity";
import { RelatedFinding } from "./relatedfinding";
/**
 * In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.
 */
export declare class FindingProviderFields extends SpeakeasyBase {
    confidence?: number;
    criticality?: number;
    relatedFindings?: RelatedFinding[];
    severity?: FindingProviderSeverity;
    types?: string[];
}
