import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The authentication method used in the context of an API request.
 *
 * @remarks
 * Only present if the `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or `service_account`.
 */
export declare enum AuditLogEventContextApiAuthenticationMethodEnum {
    Cookie = "cookie",
    Oauth = "oauth",
    PersonalAccessToken = "personal_access_token",
    ServiceAccount = "service_account"
}
/**
 * The type of context.
 *
 * @remarks
 * Can be one of `web`, `desktop`, `mobile`, `asana_support`, `asana`, `email`, or `api`.
 */
export declare enum AuditLogEventContextContextTypeEnum {
    Web = "web",
    Desktop = "desktop",
    Mobile = "mobile",
    AsanaSupport = "asana_support",
    Asana = "asana",
    Email = "email",
    Api = "api"
}
/**
 * The context from which this event originated.
 */
export declare class AuditLogEventContext extends SpeakeasyBase {
    /**
     * The authentication method used in the context of an API request.
     *
     * @remarks
     * Only present if the `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or `service_account`.
     */
    apiAuthenticationMethod?: AuditLogEventContextApiAuthenticationMethodEnum;
    /**
     * The IP address of the client that initiated the event, if applicable.
     */
    clientIpAddress?: string;
    /**
     * The type of context.
     *
     * @remarks
     * Can be one of `web`, `desktop`, `mobile`, `asana_support`, `asana`, `email`, or `api`.
     */
    contextType?: AuditLogEventContextContextTypeEnum;
    /**
     * The name of the OAuth App that initiated the event.
     *
     * @remarks
     * Only present if the `api_authentication_method` is `oauth`.
     */
    oauthAppName?: string;
    /**
     * The user agent of the client that initiated the event, if applicable.
     */
    userAgent?: string;
}
