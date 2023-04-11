import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A distribution Configuration and a list of tags to be associated with the distribution.
 */
export declare class CreateDistributionWithTags20190326RequestBodyDistributionConfigWithTags extends SpeakeasyBase {
    distributionConfig?: shared.DistributionConfig;
    tags?: shared.Tags;
}
export declare class CreateDistributionWithTags20190326RequestBody extends SpeakeasyBase {
    /**
     * A distribution Configuration and a list of tags to be associated with the distribution.
     */
    distributionConfigWithTags: CreateDistributionWithTags20190326RequestBodyDistributionConfigWithTags;
}
export declare enum CreateDistributionWithTags20190326WithTagsEnum {
    True = "true"
}
export declare class CreateDistributionWithTags20190326Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    withTags: CreateDistributionWithTags20190326WithTagsEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistributionWithTags20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
