import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
 */
export declare class CreateStreamingDistributionWithTags20181105RequestBodyStreamingDistributionConfigWithTags extends SpeakeasyBase {
    streamingDistributionConfig?: shared.StreamingDistributionConfig;
    tags?: shared.Tags;
}
export declare class CreateStreamingDistributionWithTags20181105RequestBody extends SpeakeasyBase {
    /**
     * A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
     */
    streamingDistributionConfigWithTags: CreateStreamingDistributionWithTags20181105RequestBodyStreamingDistributionConfigWithTags;
}
export declare enum CreateStreamingDistributionWithTags20181105WithTagsEnum {
    True = "true"
}
export declare class CreateStreamingDistributionWithTags20181105Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    withTags: CreateStreamingDistributionWithTags20181105WithTagsEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistributionWithTags20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
