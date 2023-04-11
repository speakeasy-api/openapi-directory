import { SpeakeasyBase } from "../../../internal/utils";
import { TrainingRepositoryAccessModeEnum } from "./trainingrepositoryaccessmodeenum";
import { TrainingRepositoryAuthConfig } from "./trainingrepositoryauthconfig";
/**
 * The configuration to use an image from a private Docker registry for a training job.
 */
export declare class TrainingImageConfig extends SpeakeasyBase {
    trainingRepositoryAccessMode: TrainingRepositoryAccessModeEnum;
    trainingRepositoryAuthConfig?: TrainingRepositoryAuthConfig;
}
