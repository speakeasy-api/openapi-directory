import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScimServiceProviderConfigAuthenticationSchemes extends SpeakeasyBase {
    description?: string;
    name?: string;
    specUri?: string;
    type?: string;
}
export declare class ScimServiceProviderConfigBulk extends SpeakeasyBase {
    maxOperations?: number;
    maxPayloadSize?: number;
    supported?: boolean;
}
export declare class ScimServiceProviderConfigChangePassword extends SpeakeasyBase {
    supported?: boolean;
}
export declare class ScimServiceProviderConfigEtag extends SpeakeasyBase {
    supported?: boolean;
}
export declare class ScimServiceProviderConfigFilter extends SpeakeasyBase {
    maxResults?: number;
    supported?: boolean;
}
export declare class ScimServiceProviderConfigPatch extends SpeakeasyBase {
    supported?: boolean;
}
export declare class ScimServiceProviderConfigSort extends SpeakeasyBase {
    supported?: boolean;
}
export declare class ScimServiceProviderConfig extends SpeakeasyBase {
    authenticationSchemes?: ScimServiceProviderConfigAuthenticationSchemes;
    bulk?: ScimServiceProviderConfigBulk;
    changePassword?: ScimServiceProviderConfigChangePassword;
    documentationUri?: string;
    etag?: ScimServiceProviderConfigEtag;
    filter?: ScimServiceProviderConfigFilter;
    patch?: ScimServiceProviderConfigPatch;
    schemas?: string[];
    sort?: ScimServiceProviderConfigSort;
}
