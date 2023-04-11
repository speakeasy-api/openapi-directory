import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the type of dimension. Supported types: <code>TOPIC_FILTER.</code>
 */
export declare enum CreateDimensionRequestBodyTypeEnum {
    TopicFilter = "TOPIC_FILTER"
}
export declare class CreateDimensionRequestBody extends SpeakeasyBase {
    /**
     * Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
     */
    clientRequestToken: string;
    /**
     * Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
     */
    stringValues: string[];
    /**
     * Metadata that can be used to manage the dimension.
     */
    tags?: shared.Tag[];
    /**
     * Specifies the type of dimension. Supported types: <code>TOPIC_FILTER.</code>
     */
    type: CreateDimensionRequestBodyTypeEnum;
}
export declare class CreateDimensionRequest extends SpeakeasyBase {
    requestBody: CreateDimensionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.
     */
    name: string;
}
export declare class CreateDimensionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDimensionResponse?: shared.CreateDimensionResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
