import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UntagStreamRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the stream that you want to remove tags from.
     */
    streamARN?: string;
    /**
     * The name of the stream that you want to remove tags from.
     */
    streamName?: string;
    /**
     * A list of the keys of the tags that you want to remove.
     */
    tagKeyList: string[];
}
export declare class UntagStreamRequest extends SpeakeasyBase {
    requestBody: UntagStreamRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagStreamResponse extends SpeakeasyBase {
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
    untagStreamOutput?: Record<string, any>;
}
