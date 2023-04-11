import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEdgeDeploymentPlanXAmzTargetEnum {
    SageMakerDescribeEdgeDeploymentPlan = "SageMaker.DescribeEdgeDeploymentPlan"
}
export declare class DescribeEdgeDeploymentPlanRequest extends SpeakeasyBase {
    describeEdgeDeploymentPlanRequest: shared.DescribeEdgeDeploymentPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEdgeDeploymentPlanXAmzTargetEnum;
}
export declare class DescribeEdgeDeploymentPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEdgeDeploymentPlanResponse?: shared.DescribeEdgeDeploymentPlanResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
