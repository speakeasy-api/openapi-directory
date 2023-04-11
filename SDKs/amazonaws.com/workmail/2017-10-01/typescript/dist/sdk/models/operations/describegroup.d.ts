import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGroupXAmzTargetEnum {
    WorkMailServiceDescribeGroup = "WorkMailService.DescribeGroup"
}
export declare class DescribeGroupRequest extends SpeakeasyBase {
    describeGroupRequest: shared.DescribeGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGroupXAmzTargetEnum;
}
export declare class DescribeGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeGroupResponse?: shared.DescribeGroupResponse;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
