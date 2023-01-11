import { SpeakeasyBase } from "../../../internal/utils";
export declare class LabOrderIcd10Code extends SpeakeasyBase {
    code?: string;
    description?: string;
}
export declare enum LabOrderPriorityEnum {
    N = "N",
    S = "S"
}
export declare class LabOrder extends SpeakeasyBase {
    accessionNumber?: string;
    doctor: number;
    documents?: string[];
    icd10Codes?: LabOrderIcd10Code[];
    id?: number;
    notes?: string;
    patient: number;
    priority?: LabOrderPriorityEnum;
    requisitionId?: string;
    status?: string;
    sublab: number;
    timestamp?: string;
}
