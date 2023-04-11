import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
/**
 * Success
 */
export declare class BatchDeleteConnectionResponse extends SpeakeasyBase {
    errors?: Record<string, ErrorDetail>;
    succeeded?: string[];
}
