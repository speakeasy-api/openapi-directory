import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateUsageLimitXAmzTargetEnum {
    RedshiftServerlessUpdateUsageLimit = "RedshiftServerless.UpdateUsageLimit"
}
export declare class UpdateUsageLimitRequest extends SpeakeasyBase {
    updateUsageLimitRequest: shared.UpdateUsageLimitRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUsageLimitXAmzTargetEnum;
}
export declare class UpdateUsageLimitResponse extends SpeakeasyBase {
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
    updateUsageLimitResponse?: shared.UpdateUsageLimitResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
