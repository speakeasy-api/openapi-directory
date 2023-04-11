import { SpeakeasyBase } from "../../../internal/utils";
import { ExperienceConfiguration } from "./experienceconfiguration";
import { ExperienceEndpoint } from "./experienceendpoint";
import { ExperienceStatusEnum } from "./experiencestatusenum";
/**
 * Success
 */
export declare class DescribeExperienceResponse extends SpeakeasyBase {
    configuration?: ExperienceConfiguration;
    createdAt?: Date;
    description?: string;
    endpoints?: ExperienceEndpoint[];
    errorMessage?: string;
    id?: string;
    indexId?: string;
    name?: string;
    roleArn?: string;
    status?: ExperienceStatusEnum;
    updatedAt?: Date;
}
