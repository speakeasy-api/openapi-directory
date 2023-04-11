import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeMediaStorageConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the channel.
     */
    channelARN?: string;
    /**
     * The name of the channel.
     */
    channelName?: string;
}
export declare class DescribeMediaStorageConfigurationRequest extends SpeakeasyBase {
    requestBody: DescribeMediaStorageConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeMediaStorageConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    describeMediaStorageConfigurationOutput?: shared.DescribeMediaStorageConfigurationOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
