import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartContinuousExportXAmzTargetEnum {
    AWSPoseidonServiceV20151101StartContinuousExport = "AWSPoseidonService_V2015_11_01.StartContinuousExport"
}
export declare class StartContinuousExportRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartContinuousExportXAmzTargetEnum;
}
export declare class StartContinuousExportResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    /**
     * ConflictErrorException
     */
    conflictErrorException?: any;
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
    startContinuousExportResponse?: shared.StartContinuousExportResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
