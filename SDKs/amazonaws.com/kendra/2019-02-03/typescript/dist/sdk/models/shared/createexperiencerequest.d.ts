import { SpeakeasyBase } from "../../../internal/utils";
import { ExperienceConfiguration } from "./experienceconfiguration";
export declare class CreateExperienceRequest extends SpeakeasyBase {
    clientToken?: string;
    configuration?: ExperienceConfiguration;
    description?: string;
    indexId: string;
    name: string;
    roleArn?: string;
}
