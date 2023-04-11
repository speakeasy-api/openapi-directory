import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeResourceXAmzTargetEnum {
    WorkMailServiceDescribeResource = "WorkMailService.DescribeResource"
}
export declare class DescribeResourceRequest extends SpeakeasyBase {
    describeResourceRequest: shared.DescribeResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeResourceXAmzTargetEnum;
}
export declare class DescribeResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeResourceResponse?: shared.DescribeResourceResponse;
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
