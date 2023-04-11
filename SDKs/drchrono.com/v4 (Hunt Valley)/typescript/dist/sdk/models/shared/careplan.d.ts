import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Can be one of the following: `1`(Goal), `2`(Patient education), `3`(Patient decision aid), `4`(Patient clinical instruction), `5`(Referral to other doctor), `6`(Health concerns)
 */
export declare enum CarePlanPlanTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6"
}
/**
 * OK
 */
export declare class CarePlan extends SpeakeasyBase {
    appointment?: string;
    code?: string;
    codeSystem?: string;
    createdAt?: string;
    description?: string;
    id?: number;
    instructions?: string;
    patient?: string;
    /**
     * Can be one of the following: `1`(Goal), `2`(Patient education), `3`(Patient decision aid), `4`(Patient clinical instruction), `5`(Referral to other doctor), `6`(Health concerns)
     */
    planType?: CarePlanPlanTypeEnum;
    scheduledDate?: string;
    title?: string;
    updatedAt?: string;
}
