import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEntitledApplicationsXAmzTargetEnum {
    PhotonAdminProxyServiceListEntitledApplications = "PhotonAdminProxyService.ListEntitledApplications"
}
export declare class ListEntitledApplicationsRequest extends SpeakeasyBase {
    listEntitledApplicationsRequest: shared.ListEntitledApplicationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEntitledApplicationsXAmzTargetEnum;
}
export declare class ListEntitledApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntitlementNotFoundException
     */
    entitlementNotFoundException?: any;
    /**
     * Success
     */
    listEntitledApplicationsResult?: shared.ListEntitledApplicationsResult;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
