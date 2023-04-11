import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCloudFormationStackRecordsXAmzTargetEnum {
    Lightsail20161128GetCloudFormationStackRecords = "Lightsail_20161128.GetCloudFormationStackRecords"
}
export declare class GetCloudFormationStackRecordsRequest extends SpeakeasyBase {
    getCloudFormationStackRecordsRequest: shared.GetCloudFormationStackRecordsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCloudFormationStackRecordsXAmzTargetEnum;
}
export declare class GetCloudFormationStackRecordsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountSetupInProgressException
     */
    accountSetupInProgressException?: any;
    contentType: string;
    /**
     * Success
     */
    getCloudFormationStackRecordsResult?: shared.GetCloudFormationStackRecordsResult;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * OperationFailureException
     */
    operationFailureException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
