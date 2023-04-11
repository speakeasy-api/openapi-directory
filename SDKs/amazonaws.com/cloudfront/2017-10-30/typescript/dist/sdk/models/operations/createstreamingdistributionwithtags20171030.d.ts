import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
 */
export declare class CreateStreamingDistributionWithTags20171030RequestBodyStreamingDistributionConfigWithTags extends SpeakeasyBase {
    streamingDistributionConfig?: shared.StreamingDistributionConfig;
    tags?: shared.Tags;
}
export declare class CreateStreamingDistributionWithTags20171030RequestBody extends SpeakeasyBase {
    /**
     * A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
     */
    streamingDistributionConfigWithTags: CreateStreamingDistributionWithTags20171030RequestBodyStreamingDistributionConfigWithTags;
}
export declare enum CreateStreamingDistributionWithTags20171030WithTagsEnum {
    True = "true"
}
export declare class CreateStreamingDistributionWithTags20171030Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    withTags: CreateStreamingDistributionWithTags20171030WithTagsEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistributionWithTags20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
