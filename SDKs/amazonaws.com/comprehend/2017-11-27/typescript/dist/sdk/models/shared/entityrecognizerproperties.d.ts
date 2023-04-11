import { SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerInputDataConfig } from "./entityrecognizerinputdataconfig";
import { EntityRecognizerMetadata } from "./entityrecognizermetadata";
import { EntityRecognizerOutputDataConfig } from "./entityrecognizeroutputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { ModelStatusEnum } from "./modelstatusenum";
import { VpcConfig } from "./vpcconfig";
/**
 * Describes information about an entity recognizer.
 */
export declare class EntityRecognizerProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    endTime?: Date;
    entityRecognizerArn?: string;
    flywheelArn?: string;
    inputDataConfig?: EntityRecognizerInputDataConfig;
    languageCode?: LanguageCodeEnum;
    message?: string;
    modelKmsKeyId?: string;
    outputDataConfig?: EntityRecognizerOutputDataConfig;
    recognizerMetadata?: EntityRecognizerMetadata;
    sourceModelArn?: string;
    status?: ModelStatusEnum;
    submitTime?: Date;
    trainingEndTime?: Date;
    trainingStartTime?: Date;
    versionName?: string;
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
