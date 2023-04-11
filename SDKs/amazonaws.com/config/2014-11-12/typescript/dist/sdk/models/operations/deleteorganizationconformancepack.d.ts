import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteOrganizationConformancePackXAmzTargetEnum {
    StarlingDoveServiceDeleteOrganizationConformancePack = "StarlingDoveService.DeleteOrganizationConformancePack"
}
export declare class DeleteOrganizationConformancePackRequest extends SpeakeasyBase {
    deleteOrganizationConformancePackRequest: shared.DeleteOrganizationConformancePackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOrganizationConformancePackXAmzTargetEnum;
}
export declare class DeleteOrganizationConformancePackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * NoSuchOrganizationConformancePackException
     */
    noSuchOrganizationConformancePackException?: any;
    /**
     * OrganizationAccessDeniedException
     */
    organizationAccessDeniedException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
