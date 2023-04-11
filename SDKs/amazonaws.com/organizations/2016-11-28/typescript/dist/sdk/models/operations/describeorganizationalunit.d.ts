import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeOrganizationalUnitXAmzTargetEnum {
    AWSOrganizationsV20161128DescribeOrganizationalUnit = "AWSOrganizationsV20161128.DescribeOrganizationalUnit"
}
export declare class DescribeOrganizationalUnitRequest extends SpeakeasyBase {
    describeOrganizationalUnitRequest: shared.DescribeOrganizationalUnitRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOrganizationalUnitXAmzTargetEnum;
}
export declare class DescribeOrganizationalUnitResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeOrganizationalUnitResponse?: shared.DescribeOrganizationalUnitResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OrganizationalUnitNotFoundException
     */
    organizationalUnitNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
