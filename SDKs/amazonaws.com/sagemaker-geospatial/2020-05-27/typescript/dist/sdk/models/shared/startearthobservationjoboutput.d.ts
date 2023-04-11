import { SpeakeasyBase } from "../../../internal/utils";
import { EarthObservationJobStatusEnum } from "./earthobservationjobstatusenum";
import { InputConfigOutput } from "./inputconfigoutput";
import { JobConfigInput } from "./jobconfiginput";
/**
 * Success
 */
export declare class StartEarthObservationJobOutput extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    durationInSeconds: number;
    executionRoleArn?: string;
    inputConfig?: InputConfigOutput;
    jobConfig: JobConfigInput;
    kmsKeyId?: string;
    name: string;
    status: EarthObservationJobStatusEnum;
    tags?: Record<string, string>;
}
