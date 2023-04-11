import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A distribution Configuration and a list of tags to be associated with the distribution.
 */
export declare class CreateDistributionWithTags20200531RequestBodyDistributionConfigWithTags extends SpeakeasyBase {
    distributionConfig?: shared.DistributionConfig;
    tags?: shared.Tags;
}
export declare class CreateDistributionWithTags20200531RequestBody extends SpeakeasyBase {
    /**
     * A distribution Configuration and a list of tags to be associated with the distribution.
     */
    distributionConfigWithTags: CreateDistributionWithTags20200531RequestBodyDistributionConfigWithTags;
}
export declare enum CreateDistributionWithTags20200531WithTagsEnum {
    True = "true"
}
export declare class CreateDistributionWithTags20200531Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    withTags: CreateDistributionWithTags20200531WithTagsEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistributionWithTags20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
