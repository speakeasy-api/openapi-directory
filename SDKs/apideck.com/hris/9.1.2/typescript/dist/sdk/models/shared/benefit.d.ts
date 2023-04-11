import { SpeakeasyBase } from "../../../internal/utils";
export declare class Benefit extends SpeakeasyBase {
    /**
     * The amount deducted for benefit.
     */
    employeeDeduction?: number;
    /**
     * The amount of employer contribution.
     */
    employerContribution?: number;
    /**
     * The name of the benefit.
     */
    name?: string;
}
