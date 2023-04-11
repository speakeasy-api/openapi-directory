import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSchemaXAmzTargetEnum {
    AmazonPersonalizeDescribeSchema = "AmazonPersonalize.DescribeSchema"
}
export declare class DescribeSchemaRequest extends SpeakeasyBase {
    describeSchemaRequest: shared.DescribeSchemaRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSchemaXAmzTargetEnum;
}
export declare class DescribeSchemaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSchemaResponse?: shared.DescribeSchemaResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
