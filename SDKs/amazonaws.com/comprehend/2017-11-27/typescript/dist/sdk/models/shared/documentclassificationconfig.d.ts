import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassifierModeEnum } from "./documentclassifiermodeenum";
/**
 * Configuration required for a custom classification model.
 */
export declare class DocumentClassificationConfig extends SpeakeasyBase {
    labels?: string[];
    mode: DocumentClassifierModeEnum;
}
