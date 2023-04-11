import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDirectoryConfigXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteDirectoryConfig = "PhotonAdminProxyService.DeleteDirectoryConfig"
}
export declare class DeleteDirectoryConfigRequest extends SpeakeasyBase {
    deleteDirectoryConfigRequest: shared.DeleteDirectoryConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDirectoryConfigXAmzTargetEnum;
}
export declare class DeleteDirectoryConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDirectoryConfigResult?: Record<string, any>;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
