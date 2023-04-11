import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagResourceRequestBody extends SpeakeasyBase {
    /**
     * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share that you want to add tags to.
     */
    resourceShareArn: string;
    /**
     * A list of one or more tag key and value pairs. The tag key must be present and not be an empty string. The tag value must be present but can be an empty string.
     */
    tags: shared.Tag[];
}
export declare class TagResourceRequest extends SpeakeasyBase {
    requestBody: TagResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MalformedArnException
     */
    malformedArnException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceArnNotFoundException
     */
    resourceArnNotFoundException?: any;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * TagLimitExceededException
     */
    tagLimitExceededException?: any;
    /**
     * TagPolicyViolationException
     */
    tagPolicyViolationException?: any;
    /**
     * Success
     */
    tagResourceResponse?: Record<string, any>;
    /**
     * UnknownResourceException
     */
    unknownResourceException?: any;
}
