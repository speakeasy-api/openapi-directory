import { SpeakeasyBase } from "../../../internal/utils";
import { OAuth2CustomPropTypeEnum } from "./oauth2customproptypeenum";
/**
 * Custom parameter required for OAuth 2.0 authentication.
 */
export declare class OAuth2CustomParameter extends SpeakeasyBase {
    connectorSuppliedValues?: string[];
    description?: string;
    isRequired?: boolean;
    isSensitiveField?: boolean;
    key?: string;
    label?: string;
    type?: OAuth2CustomPropTypeEnum;
}
