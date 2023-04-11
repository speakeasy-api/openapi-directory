import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionMetrics } from "./executionmetrics";
import { ProtocolException } from "./protocolexception";
export declare class ProtocolExceptionInvocationResponse extends SpeakeasyBase {
    debug?: string;
    exception: ProtocolException;
    method: string;
    metrics?: ExecutionMetrics;
    result: Record<string, any>;
}
