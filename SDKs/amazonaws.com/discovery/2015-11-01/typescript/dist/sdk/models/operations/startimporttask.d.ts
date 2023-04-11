import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartImportTaskXAmzTargetEnum {
    AWSPoseidonServiceV20151101StartImportTask = "AWSPoseidonService_V2015_11_01.StartImportTask"
}
export declare class StartImportTaskRequest extends SpeakeasyBase {
    startImportTaskRequest: shared.StartImportTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartImportTaskXAmzTargetEnum;
}
export declare class StartImportTaskResponse extends SpeakeasyBase {
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
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    /**
     * Success
     */
    startImportTaskResponse?: shared.StartImportTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
