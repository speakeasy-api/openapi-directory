import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutResourcePolicyXAmzTargetEnum {
    SecretsmanagerPutResourcePolicy = "secretsmanager.PutResourcePolicy"
}
export declare class PutResourcePolicyRequest extends SpeakeasyBase {
    putResourcePolicyRequest: shared.PutResourcePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourcePolicyXAmzTargetEnum;
}
export declare class PutResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * MalformedPolicyDocumentException
     */
    malformedPolicyDocumentException?: any;
    /**
     * PublicPolicyException
     */
    publicPolicyException?: any;
    /**
     * Success
     */
    putResourcePolicyResponse?: shared.PutResourcePolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
