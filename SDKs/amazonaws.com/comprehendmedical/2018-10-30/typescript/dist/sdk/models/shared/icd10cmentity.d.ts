import { SpeakeasyBase } from "../../../internal/utils";
import { Icd10CMAttribute } from "./icd10cmattribute";
import { Icd10CMConcept } from "./icd10cmconcept";
import { Icd10CMEntityCategoryEnum } from "./icd10cmentitycategoryenum";
import { Icd10CMEntityTypeEnum } from "./icd10cmentitytypeenum";
import { Icd10CMTrait } from "./icd10cmtrait";
/**
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
 */
export declare class Icd10CMEntity extends SpeakeasyBase {
    attributes?: Icd10CMAttribute[];
    beginOffset?: number;
    category?: Icd10CMEntityCategoryEnum;
    endOffset?: number;
    icd10CMConcepts?: Icd10CMConcept[];
    id?: number;
    score?: number;
    text?: string;
    traits?: Icd10CMTrait[];
    type?: Icd10CMEntityTypeEnum;
}
