import { SpeakeasyBase } from "../../../internal/utils";
import { CheckFailureReasonEnum } from "./checkfailurereasonenum";
import { CheckProviderEnum } from "./checkproviderenum";
import { CheckStatusEnum } from "./checkstatusenum";
/**
 * Account details for a Well-Architected best practice in relation to Trusted Advisor checks.
 */
export declare class CheckDetail extends SpeakeasyBase {
    /**
     * An Amazon Web Services account ID.
     */
    accountId?: string;
    /**
     * The ID of a choice.
     */
    choiceId?: string;
    description?: string;
    flaggedResources?: number;
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
    reason?: CheckFailureReasonEnum;
    status?: CheckStatusEnum;
    /**
     * The date and time recorded.
     */
    updatedAt?: Date;
}
