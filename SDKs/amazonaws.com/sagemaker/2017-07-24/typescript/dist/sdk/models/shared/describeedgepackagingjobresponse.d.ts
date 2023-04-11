import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";
import { EdgePresetDeploymentOutput } from "./edgepresetdeploymentoutput";
/**
 * Success
 */
export declare class DescribeEdgePackagingJobResponse extends SpeakeasyBase {
    compilationJobName?: string;
    creationTime?: Date;
    edgePackagingJobArn: string;
    edgePackagingJobName: string;
    edgePackagingJobStatus: EdgePackagingJobStatusEnum;
    edgePackagingJobStatusMessage?: string;
    lastModifiedTime?: Date;
    modelArtifact?: string;
    modelName?: string;
    modelSignature?: string;
    modelVersion?: string;
    outputConfig?: EdgeOutputConfig;
    presetDeploymentOutput?: EdgePresetDeploymentOutput;
    resourceKey?: string;
    roleArn?: string;
}
