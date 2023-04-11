import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSecurityConfigXAmzTargetEnum {
    OpenSearchServerlessDeleteSecurityConfig = "OpenSearchServerless.DeleteSecurityConfig"
}
export declare class DeleteSecurityConfigRequest extends SpeakeasyBase {
    deleteSecurityConfigRequest: shared.DeleteSecurityConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSecurityConfigXAmzTargetEnum;
}
export declare class DeleteSecurityConfigResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteSecurityConfigResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
