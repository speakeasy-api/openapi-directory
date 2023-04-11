import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAccountAssignmentDeletionStatusXAmzTargetEnum {
    SWBExternalServiceDescribeAccountAssignmentDeletionStatus = "SWBExternalService.DescribeAccountAssignmentDeletionStatus"
}
export declare class DescribeAccountAssignmentDeletionStatusRequest extends SpeakeasyBase {
    describeAccountAssignmentDeletionStatusRequest: shared.DescribeAccountAssignmentDeletionStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountAssignmentDeletionStatusXAmzTargetEnum;
}
export declare class DescribeAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAccountAssignmentDeletionStatusResponse?: shared.DescribeAccountAssignmentDeletionStatusResponse;
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
