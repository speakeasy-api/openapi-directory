import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetParameterXAmzTargetEnum {
    AmazonSSMGetParameter = "AmazonSSM.GetParameter"
}
export declare class GetParameterRequest extends SpeakeasyBase {
    getParameterRequest: shared.GetParameterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetParameterXAmzTargetEnum;
}
export declare class GetParameterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getParameterResult?: shared.GetParameterResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidKeyId
     */
    invalidKeyId?: any;
    /**
     * ParameterNotFound
     */
    parameterNotFound?: any;
    /**
     * ParameterVersionNotFound
     */
    parameterVersionNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
