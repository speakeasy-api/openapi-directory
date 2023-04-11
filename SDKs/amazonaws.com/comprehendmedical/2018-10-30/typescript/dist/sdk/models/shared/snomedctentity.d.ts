import { SpeakeasyBase } from "../../../internal/utils";
import { SNOMEDCTAttribute } from "./snomedctattribute";
import { SNOMEDCTConcept } from "./snomedctconcept";
import { SNOMEDCTEntityCategoryEnum } from "./snomedctentitycategoryenum";
import { SNOMEDCTEntityTypeEnum } from "./snomedctentitytypeenum";
import { SNOMEDCTTrait } from "./snomedcttrait";
/**
 *  The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
 */
export declare class SNOMEDCTEntity extends SpeakeasyBase {
    attributes?: SNOMEDCTAttribute[];
    beginOffset?: number;
    category?: SNOMEDCTEntityCategoryEnum;
    endOffset?: number;
    id?: number;
    snomedctConcepts?: SNOMEDCTConcept[];
    score?: number;
    text?: string;
    traits?: SNOMEDCTTrait[];
    type?: SNOMEDCTEntityTypeEnum;
}
