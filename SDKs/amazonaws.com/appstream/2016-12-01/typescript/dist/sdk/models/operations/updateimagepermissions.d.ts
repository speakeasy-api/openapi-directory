import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateImagePermissionsXAmzTargetEnum {
    PhotonAdminProxyServiceUpdateImagePermissions = "PhotonAdminProxyService.UpdateImagePermissions"
}
export declare class UpdateImagePermissionsRequest extends SpeakeasyBase {
    updateImagePermissionsRequest: shared.UpdateImagePermissionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateImagePermissionsXAmzTargetEnum;
}
export declare class UpdateImagePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotAvailableException
     */
    resourceNotAvailableException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateImagePermissionsResult?: Record<string, any>;
}
