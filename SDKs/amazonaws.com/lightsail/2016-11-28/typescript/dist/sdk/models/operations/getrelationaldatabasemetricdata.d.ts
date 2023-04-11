import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRelationalDatabaseMetricDataXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseMetricData = "Lightsail_20161128.GetRelationalDatabaseMetricData"
}
export declare class GetRelationalDatabaseMetricDataRequest extends SpeakeasyBase {
    getRelationalDatabaseMetricDataRequest: shared.GetRelationalDatabaseMetricDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseMetricDataXAmzTargetEnum;
}
export declare class GetRelationalDatabaseMetricDataResponse extends SpeakeasyBase {
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
    getRelationalDatabaseMetricDataResult?: shared.GetRelationalDatabaseMetricDataResult;
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
