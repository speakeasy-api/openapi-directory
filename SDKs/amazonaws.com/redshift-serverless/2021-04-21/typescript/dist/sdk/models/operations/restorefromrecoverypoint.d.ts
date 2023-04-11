import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreFromRecoveryPointXAmzTargetEnum {
    RedshiftServerlessRestoreFromRecoveryPoint = "RedshiftServerless.RestoreFromRecoveryPoint"
}
export declare class RestoreFromRecoveryPointRequest extends SpeakeasyBase {
    restoreFromRecoveryPointRequest: shared.RestoreFromRecoveryPointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreFromRecoveryPointXAmzTargetEnum;
}
export declare class RestoreFromRecoveryPointResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    restoreFromRecoveryPointResponse?: shared.RestoreFromRecoveryPointResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
