import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRandomPasswordXAmzTargetEnum {
    SecretsmanagerGetRandomPassword = "secretsmanager.GetRandomPassword"
}
export declare class GetRandomPasswordRequest extends SpeakeasyBase {
    getRandomPasswordRequest: shared.GetRandomPasswordRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRandomPasswordXAmzTargetEnum;
}
export declare class GetRandomPasswordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRandomPasswordResponse?: shared.GetRandomPasswordResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
