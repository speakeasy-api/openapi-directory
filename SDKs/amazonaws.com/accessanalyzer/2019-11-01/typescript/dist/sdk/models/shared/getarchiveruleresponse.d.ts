import { SpeakeasyBase } from "../../../internal/utils";
import { ArchiveRuleSummary } from "./archiverulesummary";
/**
 * The response to the request.
 */
export declare class GetArchiveRuleResponse extends SpeakeasyBase {
    /**
     * Contains information about an archive rule.
     */
    archiveRule: ArchiveRuleSummary;
}
