import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAccessPolicyXAmzTargetEnum {
    OpenSearchServerlessCreateAccessPolicy = "OpenSearchServerless.CreateAccessPolicy"
}
export declare class CreateAccessPolicyRequest extends SpeakeasyBase {
    createAccessPolicyRequest: shared.CreateAccessPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAccessPolicyXAmzTargetEnum;
}
export declare class CreateAccessPolicyResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createAccessPolicyResponse?: shared.CreateAccessPolicyResponse;
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
