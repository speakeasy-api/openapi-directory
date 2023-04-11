import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartQueryXAmzTargetEnum {
    Logs20140328StartQuery = "Logs_20140328.StartQuery"
}
export declare class StartQueryRequest extends SpeakeasyBase {
    startQueryRequest: shared.StartQueryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartQueryXAmzTargetEnum;
}
export declare class StartQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * MalformedQueryException
     */
    malformedQueryException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    startQueryResponse?: shared.StartQueryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
