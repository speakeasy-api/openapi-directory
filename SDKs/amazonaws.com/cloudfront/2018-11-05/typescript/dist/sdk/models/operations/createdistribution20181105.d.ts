import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A distribution configuration.
 */
export declare class CreateDistribution20181105RequestBodyDistributionConfig extends SpeakeasyBase {
    aliases?: shared.Aliases;
    cacheBehaviors?: shared.CacheBehaviors;
    callerReference?: string;
    comment?: string;
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
    viewerCertificate?: shared.ViewerCertificate;
    webACLId?: string;
}
export declare class CreateDistribution20181105RequestBody extends SpeakeasyBase {
    /**
     * A distribution configuration.
     */
    distributionConfig: CreateDistribution20181105RequestBodyDistributionConfig;
}
export declare class CreateDistribution20181105Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistribution20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
