import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes SAML options for an OpenSearch Serverless security configuration in the form of a key-value map.
 */
export declare class SamlConfigOptions extends SpeakeasyBase {
    groupAttribute?: string;
    metadata: string;
    sessionTimeout?: number;
    userAttribute?: string;
}
