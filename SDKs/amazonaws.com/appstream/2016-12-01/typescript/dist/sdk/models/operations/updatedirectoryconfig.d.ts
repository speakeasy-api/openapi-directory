import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDirectoryConfigXAmzTargetEnum {
    PhotonAdminProxyServiceUpdateDirectoryConfig = "PhotonAdminProxyService.UpdateDirectoryConfig"
}
export declare class UpdateDirectoryConfigRequest extends SpeakeasyBase {
    updateDirectoryConfigRequest: shared.UpdateDirectoryConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDirectoryConfigXAmzTargetEnum;
}
export declare class UpdateDirectoryConfigResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateDirectoryConfigResult?: shared.UpdateDirectoryConfigResult;
}
