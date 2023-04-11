import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAppXAmzTargetEnum {
    AWSServerMigrationServiceV20161024UpdateApp = "AWSServerMigrationService_V2016_10_24.UpdateApp"
}
export declare class UpdateAppRequest extends SpeakeasyBase {
    updateAppRequest: shared.UpdateAppRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAppXAmzTargetEnum;
}
export declare class UpdateAppResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalError
     */
    internalError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
    /**
     * Success
     */
    updateAppResponse?: shared.UpdateAppResponse;
}
