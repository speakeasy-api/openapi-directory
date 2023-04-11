import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalResultAttributeValue } from "./additionalresultattributevalue";
import { AdditionalResultAttributeValueTypeEnum } from "./additionalresultattributevaluetypeenum";
/**
 * An attribute returned from an index query.
 */
export declare class AdditionalResultAttribute extends SpeakeasyBase {
    key: string;
    value: AdditionalResultAttributeValue;
    valueType: AdditionalResultAttributeValueTypeEnum;
}
