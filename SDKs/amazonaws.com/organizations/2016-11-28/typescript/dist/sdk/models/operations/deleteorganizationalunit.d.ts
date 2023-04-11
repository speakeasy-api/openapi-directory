import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteOrganizationalUnitXAmzTargetEnum {
    AWSOrganizationsV20161128DeleteOrganizationalUnit = "AWSOrganizationsV20161128.DeleteOrganizationalUnit"
}
export declare class DeleteOrganizationalUnitRequest extends SpeakeasyBase {
    deleteOrganizationalUnitRequest: shared.DeleteOrganizationalUnitRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOrganizationalUnitXAmzTargetEnum;
}
export declare class DeleteOrganizationalUnitResponse extends SpeakeasyBase {
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
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OrganizationalUnitNotEmptyException
     */
    organizationalUnitNotEmptyException?: any;
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
