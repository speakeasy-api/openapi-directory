import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLCandidate } from "./automlcandidate";
import { AutoMLDataSplitConfig } from "./automldatasplitconfig";
import { AutoMLJobChannel } from "./automljobchannel";
import { AutoMLJobObjective } from "./automljobobjective";
import { AutoMLJobSecondaryStatusEnum } from "./automljobsecondarystatusenum";
import { AutoMLJobStatusEnum } from "./automljobstatusenum";
import { AutoMLOutputDataConfig } from "./automloutputdataconfig";
import { AutoMLPartialFailureReason } from "./automlpartialfailurereason";
import { AutoMLProblemTypeConfig } from "./automlproblemtypeconfig";
import { AutoMLSecurityConfig } from "./automlsecurityconfig";
import { ModelDeployConfig } from "./modeldeployconfig";
import { ModelDeployResult } from "./modeldeployresult";
/**
 * Success
 */
export declare class DescribeAutoMLJobV2Response extends SpeakeasyBase {
    autoMLJobArn: string;
    autoMLJobInputDataConfig: AutoMLJobChannel[];
    autoMLJobName: string;
    autoMLJobObjective?: AutoMLJobObjective;
    autoMLJobSecondaryStatus: AutoMLJobSecondaryStatusEnum;
    autoMLJobStatus: AutoMLJobStatusEnum;
    autoMLProblemTypeConfig?: AutoMLProblemTypeConfig;
    bestCandidate?: AutoMLCandidate;
    creationTime: Date;
    dataSplitConfig?: AutoMLDataSplitConfig;
    endTime?: Date;
    failureReason?: string;
    lastModifiedTime: Date;
    modelDeployConfig?: ModelDeployConfig;
    modelDeployResult?: ModelDeployResult;
    outputDataConfig: AutoMLOutputDataConfig;
    partialFailureReasons?: AutoMLPartialFailureReason[];
    roleArn: string;
    securityConfig?: AutoMLSecurityConfig;
}
