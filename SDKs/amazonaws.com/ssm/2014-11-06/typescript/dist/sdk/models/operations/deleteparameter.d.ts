import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteParameterXAmzTargetEnum {
    AmazonSSMDeleteParameter = "AmazonSSM.DeleteParameter"
}
export declare class DeleteParameterRequest extends SpeakeasyBase {
    deleteParameterRequest: shared.DeleteParameterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteParameterXAmzTargetEnum;
}
export declare class DeleteParameterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteParameterResult?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ParameterNotFound
     */
    parameterNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
