import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationResult } from "./authenticationresult";
import { FraudDetectionResult } from "./frauddetectionresult";
import { StreamingStatusEnum } from "./streamingstatusenum";
/**
 * Success
 */
export declare class EvaluateSessionResponse extends SpeakeasyBase {
    authenticationResult?: AuthenticationResult;
    domainId?: string;
    fraudDetectionResult?: FraudDetectionResult;
    sessionId?: string;
    sessionName?: string;
    streamingStatus?: StreamingStatusEnum;
}
