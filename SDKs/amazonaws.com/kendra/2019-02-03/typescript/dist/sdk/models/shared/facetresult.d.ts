import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentAttributeValueCountPair } from "./documentattributevaluecountpair";
import { DocumentAttributeValueTypeEnum } from "./documentattributevaluetypeenum";
/**
 * The facet values for the documents in the response.
 */
export declare class FacetResult extends SpeakeasyBase {
    documentAttributeKey?: string;
    documentAttributeValueCountPairs?: DocumentAttributeValueCountPair[];
    documentAttributeValueType?: DocumentAttributeValueTypeEnum;
}
