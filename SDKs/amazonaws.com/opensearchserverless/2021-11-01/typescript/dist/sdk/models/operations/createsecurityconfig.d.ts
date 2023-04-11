import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSecurityConfigXAmzTargetEnum {
    OpenSearchServerlessCreateSecurityConfig = "OpenSearchServerless.CreateSecurityConfig"
}
export declare class CreateSecurityConfigRequest extends SpeakeasyBase {
    createSecurityConfigRequest: shared.CreateSecurityConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSecurityConfigXAmzTargetEnum;
}
export declare class CreateSecurityConfigResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createSecurityConfigResponse?: shared.CreateSecurityConfigResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
