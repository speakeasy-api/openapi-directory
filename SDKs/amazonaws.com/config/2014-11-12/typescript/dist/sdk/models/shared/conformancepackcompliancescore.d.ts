import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.
 */
export declare class ConformancePackComplianceScore extends SpeakeasyBase {
    conformancePackName?: string;
    lastUpdatedTime?: Date;
    score?: string;
}
