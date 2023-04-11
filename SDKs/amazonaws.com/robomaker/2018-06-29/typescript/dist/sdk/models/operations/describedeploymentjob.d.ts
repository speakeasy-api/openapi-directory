import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeDeploymentJobRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the deployment job.
     */
    job: string;
}
export declare class DescribeDeploymentJobRequest extends SpeakeasyBase {
    requestBody: DescribeDeploymentJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDeploymentJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDeploymentJobResponse?: shared.DescribeDeploymentJobResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
