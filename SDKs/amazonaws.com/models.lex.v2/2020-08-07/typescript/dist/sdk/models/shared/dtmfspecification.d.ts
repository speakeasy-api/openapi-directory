import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the DTMF input specifications.
 */
export declare class DTMFSpecification extends SpeakeasyBase {
    deletionCharacter: string;
    endCharacter: string;
    endTimeoutMs: number;
    maxLength: number;
}
