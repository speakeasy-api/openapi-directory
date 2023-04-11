import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFeatureGroupXAmzTargetEnum {
    SageMakerDescribeFeatureGroup = "SageMaker.DescribeFeatureGroup"
}
export declare class DescribeFeatureGroupRequest extends SpeakeasyBase {
    describeFeatureGroupRequest: shared.DescribeFeatureGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFeatureGroupXAmzTargetEnum;
}
export declare class DescribeFeatureGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFeatureGroupResponse?: shared.DescribeFeatureGroupResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
