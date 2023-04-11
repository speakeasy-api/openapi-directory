import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { UserContextDataType } from "./usercontextdatatype";
/**
 * Represents the request to confirm registration of a user.
 */
export declare class ConfirmSignUpRequest extends SpeakeasyBase {
    analyticsMetadata?: AnalyticsMetadataType;
    clientId: string;
    clientMetadata?: Record<string, string>;
    confirmationCode: string;
    forceAliasCreation?: boolean;
    secretHash?: string;
    userContextData?: UserContextDataType;
    username: string;
}
