import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an application-specific calculation result.
 */
export declare class CalculationResult extends SpeakeasyBase {
    resultS3Uri?: string;
    resultType?: string;
    stdErrorS3Uri?: string;
    stdOutS3Uri?: string;
}
