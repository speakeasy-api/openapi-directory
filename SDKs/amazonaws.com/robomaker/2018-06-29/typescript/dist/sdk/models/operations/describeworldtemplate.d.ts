import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeWorldTemplateRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (arn) of the world template you want to describe.
     */
    template: string;
}
export declare class DescribeWorldTemplateRequest extends SpeakeasyBase {
    requestBody: DescribeWorldTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWorldTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorldTemplateResponse?: shared.DescribeWorldTemplateResponse;
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
