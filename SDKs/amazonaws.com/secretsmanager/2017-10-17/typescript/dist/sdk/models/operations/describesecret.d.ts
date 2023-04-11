import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSecretXAmzTargetEnum {
    SecretsmanagerDescribeSecret = "secretsmanager.DescribeSecret"
}
export declare class DescribeSecretRequest extends SpeakeasyBase {
    describeSecretRequest: shared.DescribeSecretRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSecretXAmzTargetEnum;
}
export declare class DescribeSecretResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSecretResponse?: shared.DescribeSecretResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
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
}
