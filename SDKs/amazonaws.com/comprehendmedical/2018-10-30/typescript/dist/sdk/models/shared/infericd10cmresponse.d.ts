import { SpeakeasyBase } from "../../../internal/utils";
import { Icd10CMEntity } from "./icd10cmentity";
/**
 * Success
 */
export declare class InferIcd10CMResponse extends SpeakeasyBase {
    entities: Icd10CMEntity[];
    modelVersion?: string;
    paginationToken?: string;
}
