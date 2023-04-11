import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
 */
export declare class CreateStreamingDistributionWithTags20180618RequestBodyStreamingDistributionConfigWithTags extends SpeakeasyBase {
    streamingDistributionConfig?: shared.StreamingDistributionConfig;
    tags?: shared.Tags;
}
export declare class CreateStreamingDistributionWithTags20180618RequestBody extends SpeakeasyBase {
    /**
     * A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
     */
    streamingDistributionConfigWithTags: CreateStreamingDistributionWithTags20180618RequestBodyStreamingDistributionConfigWithTags;
}
export declare enum CreateStreamingDistributionWithTags20180618WithTagsEnum {
    True = "true"
}
export declare class CreateStreamingDistributionWithTags20180618Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    withTags: CreateStreamingDistributionWithTags20180618WithTagsEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistributionWithTags20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
