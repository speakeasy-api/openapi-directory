import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Algorithm status
 *
 * @remarks
 *
 * Derived from preference value and threshold
 */
export declare enum AlgorithmVersionInfoStatusEnum {
    Required = "REQUIRED",
    Discouraged = "DISCOURAGED"
}
/**
 * Algorithm information
 */
export declare class AlgorithmVersionInfo extends SpeakeasyBase {
    /**
     * Algorithm description
     */
    description: string;
    /**
     * Algorithm status
     *
     * @remarks
     *
     * Derived from preference value and threshold
     */
    status: AlgorithmVersionInfoStatusEnum;
    /**
     * Algorithm version
     */
    version: string;
}
