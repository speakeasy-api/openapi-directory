import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDatabaseXAmzTargetEnum {
    Timestream20181101UpdateDatabase = "Timestream_20181101.UpdateDatabase"
}
export declare class UpdateDatabaseRequest extends SpeakeasyBase {
    updateDatabaseRequest: shared.UpdateDatabaseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDatabaseXAmzTargetEnum;
}
export declare class UpdateDatabaseResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidEndpointException
     */
    invalidEndpointException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateDatabaseResponse?: shared.UpdateDatabaseResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
