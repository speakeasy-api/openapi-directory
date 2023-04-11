import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSecurityConfigXAmzTargetEnum {
    OpenSearchServerlessUpdateSecurityConfig = "OpenSearchServerless.UpdateSecurityConfig"
}
export declare class UpdateSecurityConfigRequest extends SpeakeasyBase {
    updateSecurityConfigRequest: shared.UpdateSecurityConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSecurityConfigXAmzTargetEnum;
}
export declare class UpdateSecurityConfigResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSecurityConfigResponse?: shared.UpdateSecurityConfigResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
