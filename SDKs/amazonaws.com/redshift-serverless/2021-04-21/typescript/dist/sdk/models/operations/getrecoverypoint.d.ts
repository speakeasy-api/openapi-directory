import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRecoveryPointXAmzTargetEnum {
    RedshiftServerlessGetRecoveryPoint = "RedshiftServerless.GetRecoveryPoint"
}
export declare class GetRecoveryPointRequest extends SpeakeasyBase {
    getRecoveryPointRequest: shared.GetRecoveryPointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRecoveryPointXAmzTargetEnum;
}
export declare class GetRecoveryPointResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    getRecoveryPointResponse?: shared.GetRecoveryPointResponse;
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
