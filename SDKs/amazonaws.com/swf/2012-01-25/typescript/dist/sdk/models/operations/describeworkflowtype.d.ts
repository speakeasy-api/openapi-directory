import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkflowTypeXAmzTargetEnum {
    SimpleWorkflowServiceDescribeWorkflowType = "SimpleWorkflowService.DescribeWorkflowType"
}
export declare class DescribeWorkflowTypeRequest extends SpeakeasyBase {
    describeWorkflowTypeInput: shared.DescribeWorkflowTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkflowTypeXAmzTargetEnum;
}
export declare class DescribeWorkflowTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
    /**
     * Success
     */
    workflowTypeDetail?: shared.WorkflowTypeDetail;
}
