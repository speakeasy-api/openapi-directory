import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A distribution configuration.
 */
export declare class UpdateDistribution20200531RequestBodyDistributionConfig extends SpeakeasyBase {
    aliases?: shared.Aliases;
    cacheBehaviors?: shared.CacheBehaviors;
    callerReference?: string;
    comment?: string;
    continuousDeploymentPolicyId?: string;
    customErrorResponses?: shared.CustomErrorResponses;
    defaultCacheBehavior?: shared.DefaultCacheBehavior;
    defaultRootObject?: string;
    enabled?: boolean;
    httpVersion?: shared.HttpVersionEnum;
    isIpv6Enabled?: boolean;
    logging?: shared.LoggingConfig;
    originGroups?: shared.OriginGroups;
    origins?: shared.Origins;
    priceClass?: shared.PriceClassEnum;
    restrictions?: shared.Restrictions;
    staging?: boolean;
    viewerCertificate?: shared.ViewerCertificate;
    webACLId?: string;
}
export declare class UpdateDistribution20200531RequestBody extends SpeakeasyBase {
    /**
     * A distribution configuration.
     */
    distributionConfig: UpdateDistribution20200531RequestBodyDistributionConfig;
}
export declare class UpdateDistribution20200531Request extends SpeakeasyBase {
    /**
     * The distribution's id.
     */
    id: string;
    /**
     * The value of the <code>ETag</code> header that you received when retrieving the distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.
     */
    ifMatch?: string;
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDistribution20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
