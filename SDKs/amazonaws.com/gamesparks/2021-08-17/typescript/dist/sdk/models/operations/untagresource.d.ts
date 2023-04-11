import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UntagResourceRequest extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the resource to remove the tags from.
     */
    resourceArn: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The keys of the tags to remove.
     */
    tagKeys: string[];
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    untagResourceResult?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
