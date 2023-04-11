import { SpeakeasyBase } from "../../../internal/utils";
import { FieldNamespaceEnum } from "./fieldnamespaceenum";
import { FieldTypeEnum } from "./fieldtypeenum";
/**
 * Object for the summarized details of the field.
 */
export declare class FieldSummary extends SpeakeasyBase {
    fieldArn: string;
    fieldId: string;
    name: string;
    namespace: FieldNamespaceEnum;
    type: FieldTypeEnum;
}
