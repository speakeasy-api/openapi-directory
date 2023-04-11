import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResolveCustomerXAmzTargetEnum {
    AWSMPMeteringServiceResolveCustomer = "AWSMPMeteringService.ResolveCustomer"
}
export declare class ResolveCustomerRequest extends SpeakeasyBase {
    resolveCustomerRequest: shared.ResolveCustomerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResolveCustomerXAmzTargetEnum;
}
export declare class ResolveCustomerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DisabledApiException
     */
    disabledApiException?: any;
    /**
     * ExpiredTokenException
     */
    expiredTokenException?: any;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
    /**
     * Success
     */
    resolveCustomerResult?: shared.ResolveCustomerResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
