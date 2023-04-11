import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Client object
 */
export declare class Client extends SpeakeasyBase {
    applicationType?: string;
    clientId?: string;
    clientName: string;
    clientUri: string;
    contacts?: string[];
    defaultMaxAge?: number;
    defaultScopes?: string[];
    grantTypes?: string[];
    logoUri?: string;
    policyUri?: string;
    redirectUris?: string[];
    responseTypes?: string[];
    tosUri?: string;
}
