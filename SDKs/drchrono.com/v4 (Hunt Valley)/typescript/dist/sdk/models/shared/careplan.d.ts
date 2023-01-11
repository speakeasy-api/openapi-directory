import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CarePlanPlanTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6"
}
export declare class CarePlan extends SpeakeasyBase {
    appointment?: string;
    code?: string;
    codeSystem?: string;
    createdAt?: string;
    description?: string;
    id?: number;
    instructions?: string;
    patient?: string;
    planType?: CarePlanPlanTypeEnum;
    scheduledDate?: string;
    title?: string;
    updatedAt?: string;
}
