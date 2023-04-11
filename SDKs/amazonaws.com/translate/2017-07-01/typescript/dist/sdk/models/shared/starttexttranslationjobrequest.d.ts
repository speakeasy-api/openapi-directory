import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
import { TranslationSettings } from "./translationsettings";
export declare class StartTextTranslationJobRequest extends SpeakeasyBase {
    clientToken: string;
    dataAccessRoleArn: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    outputDataConfig: OutputDataConfig;
    parallelDataNames?: string[];
    settings?: TranslationSettings;
    sourceLanguageCode: string;
    targetLanguageCodes: string[];
    terminologyNames?: string[];
}
