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
     * The ARN of the pipe.
     */
    resourceArn: string;
    /**
     * The list of tag keys to remove from the pipe.
     */
    tagKeys: string[];
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    untagResourceResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
