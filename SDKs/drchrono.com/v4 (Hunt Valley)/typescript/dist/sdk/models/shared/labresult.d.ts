import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LabResultAbnormalStatusEnum {
    L = "L",
    Ll = "LL",
    H = "H",
    Hh = "HH",
    LessThan = "<",
    GreaterThan = ">",
    A = "A",
    Aa = "AA",
    S = "S",
    R = "R",
    I = "I",
    Neg = "NEG",
    Pos = "POS",
    N = "N",
    Unknown = ""
}
export declare enum LabResultStatusEnum {
    P = "P",
    I = "I",
    C = "C",
    F = "F",
    X = "X"
}
export declare class LabResult extends SpeakeasyBase {
    abnormalStatus?: LabResultAbnormalStatusEnum;
    comments?: string;
    document: number;
    groupCode?: string;
    id?: number;
    isAbnormal?: string;
    labOrder?: string;
    labTest: number;
    normalRange?: string;
    observationCode?: string;
    observationDescription?: string;
    specimenReceived?: string;
    status: LabResultStatusEnum;
    testPerformed: string;
    unit?: string;
    value: string;
    valueIsNumeric?: boolean;
}
