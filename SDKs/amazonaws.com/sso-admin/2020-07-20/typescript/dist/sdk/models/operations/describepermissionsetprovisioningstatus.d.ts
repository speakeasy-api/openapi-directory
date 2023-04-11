import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePermissionSetProvisioningStatusXAmzTargetEnum {
    SWBExternalServiceDescribePermissionSetProvisioningStatus = "SWBExternalService.DescribePermissionSetProvisioningStatus"
}
export declare class DescribePermissionSetProvisioningStatusRequest extends SpeakeasyBase {
    describePermissionSetProvisioningStatusRequest: shared.DescribePermissionSetProvisioningStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePermissionSetProvisioningStatusXAmzTargetEnum;
}
export declare class DescribePermissionSetProvisioningStatusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describePermissionSetProvisioningStatusResponse?: shared.DescribePermissionSetProvisioningStatusResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
