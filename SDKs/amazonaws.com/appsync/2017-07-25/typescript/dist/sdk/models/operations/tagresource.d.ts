import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TagResourceRequestBody extends SpeakeasyBase {
    /**
     * A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.
     */
    tags: Record<string, string>;
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
     * The <code>GraphqlApi</code> Amazon Resource Name (ARN).
     */
    resourceArn: string;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    tagResourceResponse?: Record<string, any>;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
