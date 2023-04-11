import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApplicationComponentStrategiesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The ID of the application component. The ID is unique within an AWS account.
     */
    applicationComponentId: string;
}
export declare class GetApplicationComponentStrategiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getApplicationComponentStrategiesResponse?: shared.GetApplicationComponentStrategiesResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
