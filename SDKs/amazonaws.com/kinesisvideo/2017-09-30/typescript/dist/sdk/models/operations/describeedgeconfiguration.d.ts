import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeEdgeConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code>or the <code>StreamARN</code>.
     */
    streamARN?: string;
    /**
     * The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
     */
    streamName?: string;
}
export declare class DescribeEdgeConfigurationRequest extends SpeakeasyBase {
    requestBody: DescribeEdgeConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeEdgeConfigurationResponse extends SpeakeasyBase {
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
    describeEdgeConfigurationOutput?: shared.DescribeEdgeConfigurationOutput;
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
    /**
     * StreamEdgeConfigurationNotFoundException
     */
    streamEdgeConfigurationNotFoundException?: any;
}
