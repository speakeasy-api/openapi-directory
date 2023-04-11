import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UntagResourceRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * ARN of a resource.
     */
    resourceArn: string;
    /**
     * Keys of a resource tag.
     */
    tagKeys: string[];
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    untagResourceResponse?: Record<string, any>;
}
