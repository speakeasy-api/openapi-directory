import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSamlConfigurationRequest extends SpeakeasyBase {
    dollarLocation?: string;
    action?: string;
    addGroupMemberships?: boolean;
    apply?: boolean;
    assertionConsumerServiceURL?: string;
    clockTolerance?: number;
    createUser?: boolean;
    defaultGroups?: string[];
    defaultRedirectUrl?: string;
    delete?: boolean;
    digestMethod?: string;
    groupMembershipAttribute?: string;
    handleLogout?: boolean;
    idpCertAlias?: string;
    idpHttpRedirect?: boolean;
    idpUrl?: string;
    keyStorePassword?: string;
    logoutUrl?: string;
    nameIdFormat?: string;
    path?: string[];
    post?: boolean;
    propertylist?: string[];
    serviceRanking?: number;
    serviceProviderEntityId?: string;
    signatureMethod?: string;
    spPrivateKeyAlias?: string;
    synchronizeAttributes?: string[];
    useEncryption?: boolean;
    userIDAttribute?: string;
    userIntermediatePath?: string;
}
export declare class PostSamlConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Retrieved AEM SAML Configuration
     */
    samlConfigurationInfo?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    postSamlConfiguration302TextPlainString?: string;
    /**
     * Default response
     */
    postSamlConfigurationDefaultTextPlainString?: string;
}
