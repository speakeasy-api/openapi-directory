import { SpeakeasyBase } from "../../../internal/utils";
import { Benefit } from "./benefit";
import { Deduction } from "./deduction";
import { Tax } from "./tax";
export declare class Compensation extends SpeakeasyBase {
    /**
     * An array of employee benefits for the pay period.
     */
    benefits?: Benefit[];
    /**
     * An array of employee deductions for the pay period.
     */
    deductions?: Deduction[];
    /**
     * A unique identifier for an object.
     */
    employeeId: string;
    /**
     * The employee's gross pay. Only available when payroll has been processed
     */
    grossPay?: number;
    /**
     * The employee's net pay. Only available when payroll has been processed
     */
    netPay?: number;
    /**
     * An array of employer and employee taxes for the pay period.
     */
    taxes?: Tax[];
}
