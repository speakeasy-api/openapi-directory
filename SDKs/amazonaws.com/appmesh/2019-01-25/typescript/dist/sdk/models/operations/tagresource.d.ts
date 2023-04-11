import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagResourceRequestBody extends SpeakeasyBase {
    /**
     * The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     */
    tags: shared.TagRef[];
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
    /**
     * The Amazon Resource Name (ARN) of the resource to add tags to.
     */
    resourceArn: string;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    tagResourceOutput?: Record<string, any>;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
