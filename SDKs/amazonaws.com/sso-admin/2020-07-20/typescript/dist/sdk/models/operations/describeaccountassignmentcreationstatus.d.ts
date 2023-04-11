import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAccountAssignmentCreationStatusXAmzTargetEnum {
    SWBExternalServiceDescribeAccountAssignmentCreationStatus = "SWBExternalService.DescribeAccountAssignmentCreationStatus"
}
export declare class DescribeAccountAssignmentCreationStatusRequest extends SpeakeasyBase {
    describeAccountAssignmentCreationStatusRequest: shared.DescribeAccountAssignmentCreationStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountAssignmentCreationStatusXAmzTargetEnum;
}
export declare class DescribeAccountAssignmentCreationStatusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAccountAssignmentCreationStatusResponse?: shared.DescribeAccountAssignmentCreationStatusResponse;
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
