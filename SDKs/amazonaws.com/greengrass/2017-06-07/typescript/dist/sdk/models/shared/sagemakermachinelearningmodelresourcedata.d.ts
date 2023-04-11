import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDownloadOwnerSetting } from "./resourcedownloadownersetting";
/**
 * Attributes that define an Amazon SageMaker machine learning resource.
 */
export declare class SageMakerMachineLearningModelResourceData extends SpeakeasyBase {
    destinationPath?: string;
    /**
     * The owner setting for downloaded machine learning resources.
     */
    ownerSetting?: ResourceDownloadOwnerSetting;
    sageMakerJobArn?: string;
}
