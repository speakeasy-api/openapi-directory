import { SpeakeasyBase } from "../../../internal/utils";
import { DataIdentifierSeverityEnum } from "./dataidentifierseverityenum";
/**
 * Specifies a severity level for findings that a custom data identifier produces. A severity level determines which severity is assigned to the findings, based on the number of occurrences of text that matches the custom data identifier's detection criteria.
 */
export declare class SeverityLevel extends SpeakeasyBase {
    occurrencesThreshold: number;
    severity: DataIdentifierSeverityEnum;
}
