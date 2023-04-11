import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisTypeEnum } from "./analysistypeenum";
import { ConfigFileStateEnum } from "./configfilestateenum";
import { JobStateEnum } from "./jobstateenum";
import { Metrics } from "./metrics";
import { ProviderTypeEnum } from "./providertypeenum";
import { SourceCodeType } from "./sourcecodetype";
import { TypeEnum } from "./typeenum";
/**
 * Information about a code review. A code review belongs to the associated repository that contains the reviewed code.
 */
export declare class CodeReview extends SpeakeasyBase {
    analysisTypes?: AnalysisTypeEnum[];
    associationArn?: string;
    codeReviewArn?: string;
    configFileState?: ConfigFileStateEnum;
    createdTimeStamp?: Date;
    lastUpdatedTimeStamp?: Date;
    metrics?: Metrics;
    name?: string;
    owner?: string;
    providerType?: ProviderTypeEnum;
    pullRequestId?: string;
    repositoryName?: string;
    sourceCodeType?: SourceCodeType;
    state?: JobStateEnum;
    stateReason?: string;
    type?: TypeEnum;
}
