import { SpeakeasyBase } from "../../../internal/utils";
import { AuditSuppression } from "./auditsuppression";
/**
 * Success
 */
export declare class ListAuditSuppressionsResponse extends SpeakeasyBase {
    nextToken?: string;
    suppressions?: AuditSuppression[];
}
