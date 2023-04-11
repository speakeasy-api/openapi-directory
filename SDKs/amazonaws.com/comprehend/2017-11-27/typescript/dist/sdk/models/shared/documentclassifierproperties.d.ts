import { SpeakeasyBase } from "../../../internal/utils";
import { ClassifierMetadata } from "./classifiermetadata";
import { DocumentClassifierInputDataConfig } from "./documentclassifierinputdataconfig";
import { DocumentClassifierModeEnum } from "./documentclassifiermodeenum";
import { DocumentClassifierOutputDataConfig } from "./documentclassifieroutputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { ModelStatusEnum } from "./modelstatusenum";
import { VpcConfig } from "./vpcconfig";
/**
 * Provides information about a document classifier.
 */
export declare class DocumentClassifierProperties extends SpeakeasyBase {
    classifierMetadata?: ClassifierMetadata;
    dataAccessRoleArn?: string;
    documentClassifierArn?: string;
    endTime?: Date;
    flywheelArn?: string;
    inputDataConfig?: DocumentClassifierInputDataConfig;
    languageCode?: LanguageCodeEnum;
    message?: string;
    mode?: DocumentClassifierModeEnum;
    modelKmsKeyId?: string;
    outputDataConfig?: DocumentClassifierOutputDataConfig;
    sourceModelArn?: string;
    status?: ModelStatusEnum;
    submitTime?: Date;
    trainingEndTime?: Date;
    trainingStartTime?: Date;
    versionName?: string;
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
