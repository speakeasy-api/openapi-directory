import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteQueryDefinitionXAmzTargetEnum {
    Logs20140328DeleteQueryDefinition = "Logs_20140328.DeleteQueryDefinition"
}
export declare class DeleteQueryDefinitionRequest extends SpeakeasyBase {
    deleteQueryDefinitionRequest: shared.DeleteQueryDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteQueryDefinitionXAmzTargetEnum;
}
export declare class DeleteQueryDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteQueryDefinitionResponse?: shared.DeleteQueryDefinitionResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
