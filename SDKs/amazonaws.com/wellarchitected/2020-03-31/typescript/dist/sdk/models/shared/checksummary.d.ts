import { SpeakeasyBase } from "../../../internal/utils";
import { CheckProviderEnum } from "./checkproviderenum";
import { CheckStatusEnum } from "./checkstatusenum";
/**
 * Trusted Advisor check summary.
 */
export declare class CheckSummary extends SpeakeasyBase {
    accountSummary?: Record<string, number>;
    /**
     * The ID of a choice.
     */
    choiceId?: string;
    description?: string;
    id?: string;
    lensArn?: string;
    name?: string;
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    pillarId?: string;
    provider?: CheckProviderEnum;
    /**
     * The ID of the question.
     */
    questionId?: string;
    status?: CheckStatusEnum;
    /**
     * The date and time recorded.
     */
    updatedAt?: Date;
}
