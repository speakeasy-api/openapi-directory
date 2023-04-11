import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentReaderConfig } from "./documentreaderconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class DetectEntitiesRequest extends SpeakeasyBase {
    bytes?: string;
    documentReaderConfig?: DocumentReaderConfig;
    endpointArn?: string;
    languageCode?: LanguageCodeEnum;
    text?: string;
}
