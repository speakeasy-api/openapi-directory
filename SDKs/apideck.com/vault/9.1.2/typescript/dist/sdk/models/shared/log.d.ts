import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request as defined in OpenApi Spec.
 */
export declare class LogOperation extends SpeakeasyBase {
    /**
     * The OpenApi Operation Id associated with the request
     */
    id: string;
    /**
     * The OpenApi Operation name associated with the request
     */
    name: string;
}
/**
 * Apideck service provider associated with request.
 */
export declare class LogService extends SpeakeasyBase {
    /**
     * Apideck service provider id.
     */
    id: string;
    /**
     * Apideck service provider name.
     */
    name: string;
}
/**
 * Which Unified Api request was made to.
 */
export declare enum LogUnifiedApiEnum {
    Crm = "crm",
    Lead = "lead",
    Proxy = "proxy",
    Vault = "vault",
    Accounting = "accounting",
    Hris = "hris",
    Ats = "ats",
    Ecommerce = "ecommerce",
    IssueTracking = "issue-tracking",
    Pos = "pos",
    FileStorage = "file-storage",
    Sms = "sms"
}
export declare class Log extends SpeakeasyBase {
    /**
     * Indicates if the request was made via REST or Graphql endpoint.
     */
    apiStyle: string;
    /**
     * The Apideck base URL the request was made to.
     */
    baseUrl: string;
    /**
     * Indicates whether or not this is a child or parent request.
     */
    childRequest: boolean;
    /**
     * The consumer Id associated with the request.
     */
    consumerId: string;
    /**
     * The entire execution time in milliseconds it took to call the Apideck service provider.
     */
    duration: number;
    /**
     * If error occurred, this is brief explanation
     */
    errorMessage?: string;
    /**
     * The entire execution time in milliseconds it took to make the request.
     */
    execution: number;
    /**
     * When request is a parent request, this indicates if there are child requests associated.
     */
    hasChildren: boolean;
    /**
     * HTTP Method of request.
     */
    httpMethod: string;
    /**
     * UUID acting as Request Identifier.
     */
    id: string;
    /**
     * Latency added by making this request via Unified Api.
     */
    latency: number;
    /**
     * The request as defined in OpenApi Spec.
     */
    operation: LogOperation;
    /**
     * When request is a child request, this UUID indicates it's parent request.
     */
    parentId: string;
    /**
     * The path component of the URI the request was made to.
     */
    path: string;
    /**
     * Indicates whether the request was made using Apidecks sandbox credentials or not.
     */
    sandbox: boolean;
    /**
     * Apideck service provider associated with request.
     */
    service: LogService;
    /**
     * The IP address of the source of the request.
     */
    sourceIp?: string;
    /**
     * HTTP Status code that was returned.
     */
    statusCode: number;
    /**
     * Whether or not the request was successful.
     */
    success: boolean;
    /**
     * ISO Date and time when the request was made.
     */
    timestamp: string;
    /**
     * Which Unified Api request was made to.
     */
    unifiedApi: LogUnifiedApiEnum;
}
