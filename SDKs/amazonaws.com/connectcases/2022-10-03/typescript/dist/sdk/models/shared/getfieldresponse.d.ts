import { SpeakeasyBase } from "../../../internal/utils";
import { FieldNamespaceEnum } from "./fieldnamespaceenum";
import { FieldTypeEnum } from "./fieldtypeenum";
/**
 * Object to store detailed field information.
 */
export declare class GetFieldResponse extends SpeakeasyBase {
    description?: string;
    fieldArn: string;
    fieldId: string;
    name: string;
    namespace: FieldNamespaceEnum;
    tags?: Record<string, string>;
    type: FieldTypeEnum;
}
