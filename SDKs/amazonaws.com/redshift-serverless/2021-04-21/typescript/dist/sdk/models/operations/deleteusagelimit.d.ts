import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteUsageLimitXAmzTargetEnum {
    RedshiftServerlessDeleteUsageLimit = "RedshiftServerless.DeleteUsageLimit"
}
export declare class DeleteUsageLimitRequest extends SpeakeasyBase {
    deleteUsageLimitRequest: shared.DeleteUsageLimitRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUsageLimitXAmzTargetEnum;
}
export declare class DeleteUsageLimitResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteUsageLimitResponse?: shared.DeleteUsageLimitResponse;
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
