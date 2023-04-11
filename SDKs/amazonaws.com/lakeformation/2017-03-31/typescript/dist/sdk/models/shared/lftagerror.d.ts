import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
import { LFTagPair } from "./lftagpair";
/**
 * A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.
 */
export declare class LFTagError extends SpeakeasyBase {
    error?: ErrorDetail;
    lfTag?: LFTagPair;
}
