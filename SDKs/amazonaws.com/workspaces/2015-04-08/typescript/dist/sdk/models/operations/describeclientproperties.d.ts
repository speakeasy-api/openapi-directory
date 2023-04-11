import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeClientPropertiesXAmzTargetEnum {
    WorkspacesServiceDescribeClientProperties = "WorkspacesService.DescribeClientProperties"
}
export declare class DescribeClientPropertiesRequest extends SpeakeasyBase {
    describeClientPropertiesRequest: shared.DescribeClientPropertiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeClientPropertiesXAmzTargetEnum;
}
export declare class DescribeClientPropertiesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeClientPropertiesResult?: shared.DescribeClientPropertiesResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
