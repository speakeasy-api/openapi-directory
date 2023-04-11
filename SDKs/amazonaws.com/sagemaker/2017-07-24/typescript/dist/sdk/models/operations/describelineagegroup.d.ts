import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLineageGroupXAmzTargetEnum {
    SageMakerDescribeLineageGroup = "SageMaker.DescribeLineageGroup"
}
export declare class DescribeLineageGroupRequest extends SpeakeasyBase {
    describeLineageGroupRequest: shared.DescribeLineageGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLineageGroupXAmzTargetEnum;
}
export declare class DescribeLineageGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLineageGroupResponse?: shared.DescribeLineageGroupResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
