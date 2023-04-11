import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TestIdentityProviderXAmzTargetEnum {
    TransferServiceTestIdentityProvider = "TransferService.TestIdentityProvider"
}
export declare class TestIdentityProviderRequest extends SpeakeasyBase {
    testIdentityProviderRequest: shared.TestIdentityProviderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestIdentityProviderXAmzTargetEnum;
}
export declare class TestIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    testIdentityProviderResponse?: shared.TestIdentityProviderResponse;
}
