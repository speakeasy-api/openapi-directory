import { SpeakeasyBase } from "../../../internal/utils";
import { SNOMEDCTAttributeTypeEnum } from "./snomedctattributetypeenum";
import { SNOMEDCTConcept } from "./snomedctconcept";
import { SNOMEDCTEntityCategoryEnum } from "./snomedctentitycategoryenum";
import { SNOMEDCTRelationshipTypeEnum } from "./snomedctrelationshiptypeenum";
import { SNOMEDCTTrait } from "./snomedcttrait";
/**
 *  The extracted attributes that relate to an entity. An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken.
 */
export declare class SNOMEDCTAttribute extends SpeakeasyBase {
    beginOffset?: number;
    category?: SNOMEDCTEntityCategoryEnum;
    endOffset?: number;
    id?: number;
    relationshipScore?: number;
    relationshipType?: SNOMEDCTRelationshipTypeEnum;
    snomedctConcepts?: SNOMEDCTConcept[];
    score?: number;
    text?: string;
    traits?: SNOMEDCTTrait[];
    type?: SNOMEDCTAttributeTypeEnum;
}
