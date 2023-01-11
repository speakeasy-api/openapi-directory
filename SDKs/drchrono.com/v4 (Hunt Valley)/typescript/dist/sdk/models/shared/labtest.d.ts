import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LabTestStatusEnum {
    P = "P",
    I = "I",
    C = "C",
    F = "F",
    X = "X"
}
export declare class LabTest extends SpeakeasyBase {
    code?: string;
    collectionDate?: string;
    description?: string;
    id?: number;
    internalNotes?: string;
    labOrder: number;
    name?: string;
    reportNotes?: string;
    specimenCondition?: string;
    specimenSource?: string;
    specimenTotalVolume?: number;
    status?: LabTestStatusEnum;
}
