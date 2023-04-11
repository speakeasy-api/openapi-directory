import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEntitlementsXAmzTargetEnum {
    AWSMPEntitlementServiceGetEntitlements = "AWSMPEntitlementService.GetEntitlements"
}
export declare class GetEntitlementsRequest extends SpeakeasyBase {
    getEntitlementsRequest: shared.GetEntitlementsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEntitlementsXAmzTargetEnum;
}
export declare class GetEntitlementsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getEntitlementsResult?: shared.GetEntitlementsResult;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: shared.InternalServiceErrorException;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: shared.InvalidParameterException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: shared.ThrottlingException;
}
