import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDownloadOwnerSetting } from "./resourcedownloadownersetting";
/**
 * Attributes that define an Amazon S3 machine learning resource.
 */
export declare class S3MachineLearningModelResourceData extends SpeakeasyBase {
    destinationPath?: string;
    /**
     * The owner setting for downloaded machine learning resources.
     */
    ownerSetting?: ResourceDownloadOwnerSetting;
    s3Uri?: string;
}
