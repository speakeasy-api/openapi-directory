import { SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlansCoverage } from "./savingsplanscoverage";
/**
 * Success
 */
export declare class GetSavingsPlansCoverageResponse extends SpeakeasyBase {
    nextToken?: string;
    savingsPlansCoverages: SavingsPlansCoverage[];
}
