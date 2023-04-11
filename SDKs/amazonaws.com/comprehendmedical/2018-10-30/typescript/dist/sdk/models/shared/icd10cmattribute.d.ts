import { SpeakeasyBase } from "../../../internal/utils";
import { Icd10CMAttributeTypeEnum } from "./icd10cmattributetypeenum";
import { Icd10CMEntityTypeEnum } from "./icd10cmentitytypeenum";
import { Icd10CMRelationshipTypeEnum } from "./icd10cmrelationshiptypeenum";
import { Icd10CMTrait } from "./icd10cmtrait";
/**
 * The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>.
 */
export declare class Icd10CMAttribute extends SpeakeasyBase {
    beginOffset?: number;
    category?: Icd10CMEntityTypeEnum;
    endOffset?: number;
    id?: number;
    relationshipScore?: number;
    relationshipType?: Icd10CMRelationshipTypeEnum;
    score?: number;
    text?: string;
    traits?: Icd10CMTrait[];
    type?: Icd10CMAttributeTypeEnum;
}
