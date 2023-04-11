import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceDescribeActivityType = "SimpleWorkflowService.DescribeActivityType"
}
export declare class DescribeActivityTypeRequest extends SpeakeasyBase {
    describeActivityTypeInput: shared.DescribeActivityTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeActivityTypeXAmzTargetEnum;
}
export declare class DescribeActivityTypeResponse extends SpeakeasyBase {
    /**
     * Success
     */
    activityTypeDetail?: shared.ActivityTypeDetail;
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
}
