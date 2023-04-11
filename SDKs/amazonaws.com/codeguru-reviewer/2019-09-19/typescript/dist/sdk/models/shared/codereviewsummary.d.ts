import { SpeakeasyBase } from "../../../internal/utils";
import { JobStateEnum } from "./jobstateenum";
import { MetricsSummary } from "./metricssummary";
import { ProviderTypeEnum } from "./providertypeenum";
import { SourceCodeType } from "./sourcecodetype";
import { TypeEnum } from "./typeenum";
/**
 * Information about the summary of the code review.
 */
export declare class CodeReviewSummary extends SpeakeasyBase {
    codeReviewArn?: string;
    createdTimeStamp?: Date;
    lastUpdatedTimeStamp?: Date;
    metricsSummary?: MetricsSummary;
    name?: string;
    owner?: string;
    providerType?: ProviderTypeEnum;
    pullRequestId?: string;
    repositoryName?: string;
    /**
     * Specifies the source code that is analyzed in a code review.
     */
    sourceCodeType?: SourceCodeType;
    state?: JobStateEnum;
    type?: TypeEnum;
}
