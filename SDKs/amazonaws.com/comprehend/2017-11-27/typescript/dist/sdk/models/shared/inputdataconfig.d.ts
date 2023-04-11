import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentReaderConfig } from "./documentreaderconfig";
import { InputFormatEnum } from "./inputformatenum";
/**
 * The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.
 */
export declare class InputDataConfig extends SpeakeasyBase {
    documentReaderConfig?: DocumentReaderConfig;
    inputFormat?: InputFormatEnum;
    s3Uri: string;
}
