import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationTypeEnum } from "./annotationtypeenum";
import { SchemaValueTypeEnum } from "./schemavaluetypeenum";
/**
 * File settings for a TSV store.
 */
export declare class TsvStoreOptions extends SpeakeasyBase {
    annotationType?: AnnotationTypeEnum;
    formatToHeader?: Record<string, string>;
    schema?: Record<string, SchemaValueTypeEnum>[];
}
