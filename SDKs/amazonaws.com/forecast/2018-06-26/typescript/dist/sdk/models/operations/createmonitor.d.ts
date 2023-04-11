import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateMonitorXAmzTargetEnum {
    AmazonForecastCreateMonitor = "AmazonForecast.CreateMonitor"
}
export declare class CreateMonitorRequest extends SpeakeasyBase {
    createMonitorRequest: shared.CreateMonitorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMonitorXAmzTargetEnum;
}
export declare class CreateMonitorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMonitorResponse?: shared.CreateMonitorResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
}
