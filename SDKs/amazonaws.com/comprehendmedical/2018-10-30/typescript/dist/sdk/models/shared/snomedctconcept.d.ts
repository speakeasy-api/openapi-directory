import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The SNOMED-CT concepts that the entity could refer to, along with a score indicating the likelihood of the match.
 */
export declare class SNOMEDCTConcept extends SpeakeasyBase {
    code?: string;
    description?: string;
    score?: number;
}
