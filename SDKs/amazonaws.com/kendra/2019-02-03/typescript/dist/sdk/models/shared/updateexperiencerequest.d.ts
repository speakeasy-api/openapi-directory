import { SpeakeasyBase } from "../../../internal/utils";
import { ExperienceConfiguration } from "./experienceconfiguration";
export declare class UpdateExperienceRequest extends SpeakeasyBase {
    configuration?: ExperienceConfiguration;
    description?: string;
    id: string;
    indexId: string;
    name?: string;
    roleArn?: string;
}
