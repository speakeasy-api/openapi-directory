import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDirectoryConfigXAmzTargetEnum {
    PhotonAdminProxyServiceCreateDirectoryConfig = "PhotonAdminProxyService.CreateDirectoryConfig"
}
export declare class CreateDirectoryConfigRequest extends SpeakeasyBase {
    createDirectoryConfigRequest: shared.CreateDirectoryConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDirectoryConfigXAmzTargetEnum;
}
export declare class CreateDirectoryConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDirectoryConfigResult?: shared.CreateDirectoryConfigResult;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
