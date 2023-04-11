import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassifierInputDataConfig } from "./documentclassifierinputdataconfig";
import { DocumentClassifierModeEnum } from "./documentclassifiermodeenum";
import { DocumentClassifierOutputDataConfig } from "./documentclassifieroutputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
export declare class CreateDocumentClassifierRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    dataAccessRoleArn: string;
    documentClassifierName: string;
    inputDataConfig: DocumentClassifierInputDataConfig;
    languageCode: LanguageCodeEnum;
    mode?: DocumentClassifierModeEnum;
    modelKmsKeyId?: string;
    modelPolicy?: string;
    outputDataConfig?: DocumentClassifierOutputDataConfig;
    tags?: Tag[];
    versionName?: string;
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
