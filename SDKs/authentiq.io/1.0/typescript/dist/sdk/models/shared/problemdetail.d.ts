import { SpeakeasyBase } from "../../../internal/utils";
/**
 * HTTP Problem Detail
 *
 * @remarks
 *
 */
export declare class ProblemDetail extends SpeakeasyBase {
    /**
     * Human-readable explanation specific to this occurrence of the problem.
     *
     * @remarks
     *
     */
    detail?: string;
    /**
     * The HTTP status code for this occurrence of the problem.
     *
     * @remarks
     *
     */
    status: number;
    /**
     * Human-readable summary of the problem type.
     *
     * @remarks
     *
     */
    title?: string;
    type: string;
}
