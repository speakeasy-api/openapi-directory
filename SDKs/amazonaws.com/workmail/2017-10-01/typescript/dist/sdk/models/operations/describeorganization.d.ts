import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeOrganizationXAmzTargetEnum {
    WorkMailServiceDescribeOrganization = "WorkMailService.DescribeOrganization"
}
export declare class DescribeOrganizationRequest extends SpeakeasyBase {
    describeOrganizationRequest: shared.DescribeOrganizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOrganizationXAmzTargetEnum;
}
export declare class DescribeOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeOrganizationResponse?: shared.DescribeOrganizationResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
