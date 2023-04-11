import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { AuthFlowTypeEnum } from "./authflowtypeenum";
import { UserContextDataType } from "./usercontextdatatype";
/**
 * Initiates the authentication request.
 */
export declare class InitiateAuthRequest extends SpeakeasyBase {
    analyticsMetadata?: AnalyticsMetadataType;
    authFlow: AuthFlowTypeEnum;
    authParameters?: Record<string, string>;
    clientId: string;
    clientMetadata?: Record<string, string>;
    userContextData?: UserContextDataType;
}
