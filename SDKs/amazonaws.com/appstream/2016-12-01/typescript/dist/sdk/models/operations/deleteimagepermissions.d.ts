import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteImagePermissionsXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteImagePermissions = "PhotonAdminProxyService.DeleteImagePermissions"
}
export declare class DeleteImagePermissionsRequest extends SpeakeasyBase {
    deleteImagePermissionsRequest: shared.DeleteImagePermissionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteImagePermissionsXAmzTargetEnum;
}
export declare class DeleteImagePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteImagePermissionsResult?: Record<string, any>;
    /**
     * ResourceNotAvailableException
     */
    resourceNotAvailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
