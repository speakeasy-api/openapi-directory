import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A distribution Configuration and a list of tags to be associated with the distribution.
 */
export declare class CreateDistributionWithTags20171030RequestBodyDistributionConfigWithTags extends SpeakeasyBase {
    distributionConfig?: shared.DistributionConfig;
    tags?: shared.Tags;
}
export declare class CreateDistributionWithTags20171030RequestBody extends SpeakeasyBase {
    /**
     * A distribution Configuration and a list of tags to be associated with the distribution.
     */
    distributionConfigWithTags: CreateDistributionWithTags20171030RequestBodyDistributionConfigWithTags;
}
export declare enum CreateDistributionWithTags20171030WithTagsEnum {
    True = "true"
}
export declare class CreateDistributionWithTags20171030Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    withTags: CreateDistributionWithTags20171030WithTagsEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistributionWithTags20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
