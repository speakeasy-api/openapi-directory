import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration information when authentication mode is FEDERATED.
 */
export declare class FederationParameters extends SpeakeasyBase {
    applicationCallBackURL?: string;
    attributeMap?: Record<string, string>;
    federationProviderName?: string;
    federationURN?: string;
    samlMetadataDocument?: string;
    samlMetadataURL?: string;
}
