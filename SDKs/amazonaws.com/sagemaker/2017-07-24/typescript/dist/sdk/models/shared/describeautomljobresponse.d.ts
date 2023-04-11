import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLCandidate } from "./automlcandidate";
import { AutoMLChannel } from "./automlchannel";
import { AutoMLJobArtifacts } from "./automljobartifacts";
import { AutoMLJobConfig } from "./automljobconfig";
import { AutoMLJobObjective } from "./automljobobjective";
import { AutoMLJobSecondaryStatusEnum } from "./automljobsecondarystatusenum";
import { AutoMLJobStatusEnum } from "./automljobstatusenum";
import { AutoMLOutputDataConfig } from "./automloutputdataconfig";
import { AutoMLPartialFailureReason } from "./automlpartialfailurereason";
import { ModelDeployConfig } from "./modeldeployconfig";
import { ModelDeployResult } from "./modeldeployresult";
import { ProblemTypeEnum } from "./problemtypeenum";
import { ResolvedAttributes } from "./resolvedattributes";
/**
 * Success
 */
export declare class DescribeAutoMLJobResponse extends SpeakeasyBase {
    autoMLJobArn: string;
    autoMLJobArtifacts?: AutoMLJobArtifacts;
    autoMLJobConfig?: AutoMLJobConfig;
    autoMLJobName: string;
    autoMLJobObjective?: AutoMLJobObjective;
    autoMLJobSecondaryStatus: AutoMLJobSecondaryStatusEnum;
    autoMLJobStatus: AutoMLJobStatusEnum;
    bestCandidate?: AutoMLCandidate;
    creationTime: Date;
    endTime?: Date;
    failureReason?: string;
    generateCandidateDefinitionsOnly?: boolean;
    inputDataConfig: AutoMLChannel[];
    lastModifiedTime: Date;
    modelDeployConfig?: ModelDeployConfig;
    modelDeployResult?: ModelDeployResult;
    outputDataConfig: AutoMLOutputDataConfig;
    partialFailureReasons?: AutoMLPartialFailureReason[];
    problemType?: ProblemTypeEnum;
    resolvedAttributes?: ResolvedAttributes;
    roleArn: string;
}
