import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCredentialsXAmzTargetEnum {
    RedshiftServerlessGetCredentials = "RedshiftServerless.GetCredentials"
}
export declare class GetCredentialsRequest extends SpeakeasyBase {
    getCredentialsRequest: shared.GetCredentialsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCredentialsXAmzTargetEnum;
}
export declare class GetCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCredentialsResponse?: shared.GetCredentialsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
