import { SpeakeasyBase } from "../../../internal/utils";
/**
 *
 * @remarks
 * Value | Notes
 * ----- | -----
 * `'L'` | `'low'`
 * `'LL'` | `'alert low'`
 * `'H'` | `'high'`
 * `'HH'` | `'alert high'`
 * `'<'` | `'panic low'`
 * `'>'` | `'panic high'`
 * `'A'` | `'abnormal'`
 * `'AA'` | `'very abnormal'`
 * `'S'` | `'susceptible'`
 * `'R'` | `'resistant'`
 * `'I'` | `'intermediate'`
 * `'NEG'` | `'negative'`
 * `'POS'` | `'positive'`
 * `'N'` | `'normal'`
 * `''` | `'no comment'`
 *
 */
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
/**
 *
 * @remarks
 * Value | Notes
 * ----- | -----
 * `'P'` | `'preliminary'`
 * `'I'` | `'pending'`
 * `'C'` | `'correction'`
 * `'F'` | `'final'`
 * `'X'` | `'canceled'`
 *
 */
export declare enum LabResultStatusEnum {
    P = "P",
    I = "I",
    C = "C",
    F = "F",
    X = "X"
}
/**
 * Created
 */
export declare class LabResult extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Value | Notes
     * ----- | -----
     * `'L'` | `'low'`
     * `'LL'` | `'alert low'`
     * `'H'` | `'high'`
     * `'HH'` | `'alert high'`
     * `'<'` | `'panic low'`
     * `'>'` | `'panic high'`
     * `'A'` | `'abnormal'`
     * `'AA'` | `'very abnormal'`
     * `'S'` | `'susceptible'`
     * `'R'` | `'resistant'`
     * `'I'` | `'intermediate'`
     * `'NEG'` | `'negative'`
     * `'POS'` | `'positive'`
     * `'N'` | `'normal'`
     * `''` | `'no comment'`
     *
     */
    abnormalStatus?: LabResultAbnormalStatusEnum;
    comments?: string;
    /**
     * ID of `/lab_documents` object for the result
     */
    document: number;
    /**
     * This is the code used for grouping result data.
     */
    groupCode?: string;
    id?: number;
    /**
     * If true, the result will be flagged for the doctor's attention
     */
    isAbnormal?: string;
    /**
     * ID of `/lab_orders` object the result belongs to
     */
    labOrder?: string;
    /**
     * ID of `/lab_tests` object for the result
     */
    labTest: number;
    /**
     * When ``value_is_numeric`` is True, this parameter must be a string of the form ``"<lower> <upper>", where both lower and upper are numerical``
     */
    normalRange?: string;
    observationCode?: string;
    /**
     * For example, ``"Blood Urea Nitrogen (BUN)"``
     */
    observationDescription?: string;
    specimenReceived?: string;
    /**
     *
     * @remarks
     * Value | Notes
     * ----- | -----
     * `'P'` | `'preliminary'`
     * `'I'` | `'pending'`
     * `'C'` | `'correction'`
     * `'F'` | `'final'`
     * `'X'` | `'canceled'`
     *
     */
    status: LabResultStatusEnum;
    testPerformed: string;
    /**
     * Unit used for the value
     */
    unit?: string;
    value: string;
    /**
     * Default to `False`
     */
    valueIsNumeric?: boolean;
}
