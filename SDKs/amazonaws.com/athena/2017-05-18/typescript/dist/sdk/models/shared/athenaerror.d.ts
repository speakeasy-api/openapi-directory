import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about an Athena query error. The <code>AthenaError</code> feature provides standardized error information to help you understand failed queries and take steps after a query failure occurs. <code>AthenaError</code> includes an <code>ErrorCategory</code> field that specifies whether the cause of the failed query is due to system error, user error, or other error.
 */
export declare class AthenaError extends SpeakeasyBase {
    errorCategory?: number;
    errorMessage?: string;
    errorType?: number;
    retryable?: boolean;
}
