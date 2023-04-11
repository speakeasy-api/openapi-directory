import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartExportTaskXAmzTargetEnum {
    AWSPoseidonServiceV20151101StartExportTask = "AWSPoseidonService_V2015_11_01.StartExportTask"
}
export declare class StartExportTaskRequest extends SpeakeasyBase {
    startExportTaskRequest: shared.StartExportTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartExportTaskXAmzTargetEnum;
}
export declare class StartExportTaskResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    contentType: string;
    /**
     * HomeRegionNotSetException
     */
    homeRegionNotSetException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    /**
     * Success
     */
    startExportTaskResponse?: shared.StartExportTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
