import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TestAlarmXAmzTargetEnum {
    Lightsail20161128TestAlarm = "Lightsail_20161128.TestAlarm"
}
export declare class TestAlarmRequest extends SpeakeasyBase {
    testAlarmRequest: shared.TestAlarmRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestAlarmXAmzTargetEnum;
}
export declare class TestAlarmResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * Success
     */
    testAlarmResult?: shared.TestAlarmResult;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
