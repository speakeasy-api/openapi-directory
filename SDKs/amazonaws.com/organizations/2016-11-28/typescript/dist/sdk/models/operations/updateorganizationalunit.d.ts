import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateOrganizationalUnitXAmzTargetEnum {
    AWSOrganizationsV20161128UpdateOrganizationalUnit = "AWSOrganizationsV20161128.UpdateOrganizationalUnit"
}
export declare class UpdateOrganizationalUnitRequest extends SpeakeasyBase {
    updateOrganizationalUnitRequest: shared.UpdateOrganizationalUnitRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateOrganizationalUnitXAmzTargetEnum;
}
export declare class UpdateOrganizationalUnitResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * DuplicateOrganizationalUnitException
     */
    duplicateOrganizationalUnitException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OrganizationalUnitNotFoundException
     */
    organizationalUnitNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateOrganizationalUnitResponse?: shared.UpdateOrganizationalUnitResponse;
}
