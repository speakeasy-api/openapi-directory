import { SpeakeasyBase } from "../../../internal/utils";
export declare class PagesHealthCheckAltDomain extends SpeakeasyBase {
    caaError?: string;
    dnsResolves?: boolean;
    enforcesHttps?: boolean;
    hasCnameRecord?: boolean;
    hasMxRecordsPresent?: boolean;
    host?: string;
    httpsError?: string;
    isARecord?: boolean;
    isApexDomain?: boolean;
    isCloudflareIp?: boolean;
    isCnameToFastly?: boolean;
    isCnameToGithubUserDomain?: boolean;
    isCnameToPagesDotGithubDotCom?: boolean;
    isFastlyIp?: boolean;
    isHttpsEligible?: boolean;
    isNonGithubPagesIpPresent?: boolean;
    isOldIpAddress?: boolean;
    isPagesDomain?: boolean;
    isPointedToGithubPagesIp?: boolean;
    isProxied?: boolean;
    isServedByPages?: boolean;
    isValid?: boolean;
    isValidDomain?: boolean;
    nameservers?: string;
    reason?: string;
    respondsToHttps?: boolean;
    shouldBeARecord?: boolean;
    uri?: string;
}
export declare class PagesHealthCheckDomain extends SpeakeasyBase {
    caaError?: string;
    dnsResolves?: boolean;
    enforcesHttps?: boolean;
    hasCnameRecord?: boolean;
    hasMxRecordsPresent?: boolean;
    host?: string;
    httpsError?: string;
    isARecord?: boolean;
    isApexDomain?: boolean;
    isCloudflareIp?: boolean;
    isCnameToFastly?: boolean;
    isCnameToGithubUserDomain?: boolean;
    isCnameToPagesDotGithubDotCom?: boolean;
    isFastlyIp?: boolean;
    isHttpsEligible?: boolean;
    isNonGithubPagesIpPresent?: boolean;
    isOldIpAddress?: boolean;
    isPagesDomain?: boolean;
    isPointedToGithubPagesIp?: boolean;
    isProxied?: boolean;
    isServedByPages?: boolean;
    isValid?: boolean;
    isValidDomain?: boolean;
    nameservers?: string;
    reason?: string;
    respondsToHttps?: boolean;
    shouldBeARecord?: boolean;
    uri?: string;
}
/**
 * Pages Health Check Status
 */
export declare class PagesHealthCheck extends SpeakeasyBase {
    altDomain?: PagesHealthCheckAltDomain;
    domain?: PagesHealthCheckDomain;
}
