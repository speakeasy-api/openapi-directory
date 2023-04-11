import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteOrganizationXAmzTargetEnum {
    WorkMailServiceDeleteOrganization = "WorkMailService.DeleteOrganization"
}
export declare class DeleteOrganizationRequest extends SpeakeasyBase {
    deleteOrganizationRequest: shared.DeleteOrganizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOrganizationXAmzTargetEnum;
}
export declare class DeleteOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteOrganizationResponse?: shared.DeleteOrganizationResponse;
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
