import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TagStreamRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.
     */
    streamARN?: string;
    /**
     * The name of the stream that you want to add the tag or tags to.
     */
    streamName?: string;
    /**
     * A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).
     */
    tags: Record<string, string>;
}
export declare class TagStreamRequest extends SpeakeasyBase {
    requestBody: TagStreamRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagStreamResponse extends SpeakeasyBase {
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidResourceFormatException
     */
    invalidResourceFormatException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    tagStreamOutput?: Record<string, any>;
    /**
     * TagsPerResourceExceededLimitException
     */
    tagsPerResourceExceededLimitException?: any;
}
