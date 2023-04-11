import { SpeakeasyBase } from "../../../internal/utils";
import { Icd10CMTraitNameEnum } from "./icd10cmtraitnameenum";
/**
 * Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.
 */
export declare class Icd10CMTrait extends SpeakeasyBase {
    name?: Icd10CMTraitNameEnum;
    score?: number;
}
