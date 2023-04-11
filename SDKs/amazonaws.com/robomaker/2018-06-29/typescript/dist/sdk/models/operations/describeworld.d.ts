import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeWorldRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (arn) of the world you want to describe.
     */
    world: string;
}
export declare class DescribeWorldRequest extends SpeakeasyBase {
    requestBody: DescribeWorldRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWorldResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorldResponse?: shared.DescribeWorldResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
