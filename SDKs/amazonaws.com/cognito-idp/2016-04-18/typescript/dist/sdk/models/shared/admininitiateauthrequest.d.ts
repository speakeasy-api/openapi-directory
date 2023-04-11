import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { AuthFlowTypeEnum } from "./authflowtypeenum";
import { ContextDataType } from "./contextdatatype";
/**
 * Initiates the authorization request, as an administrator.
 */
export declare class AdminInitiateAuthRequest extends SpeakeasyBase {
    analyticsMetadata?: AnalyticsMetadataType;
    authFlow: AuthFlowTypeEnum;
    authParameters?: Record<string, string>;
    clientId: string;
    clientMetadata?: Record<string, string>;
    contextData?: ContextDataType;
    userPoolId: string;
}
