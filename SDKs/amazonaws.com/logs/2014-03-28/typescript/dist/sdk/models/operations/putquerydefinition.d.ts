import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutQueryDefinitionXAmzTargetEnum {
    Logs20140328PutQueryDefinition = "Logs_20140328.PutQueryDefinition"
}
export declare class PutQueryDefinitionRequest extends SpeakeasyBase {
    putQueryDefinitionRequest: shared.PutQueryDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutQueryDefinitionXAmzTargetEnum;
}
export declare class PutQueryDefinitionResponse extends SpeakeasyBase {
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
     * Success
     */
    putQueryDefinitionResponse?: shared.PutQueryDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
