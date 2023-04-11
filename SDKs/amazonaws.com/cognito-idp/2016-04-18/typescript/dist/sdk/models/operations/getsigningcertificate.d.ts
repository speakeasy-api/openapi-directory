import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSigningCertificateXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceGetSigningCertificate = "AWSCognitoIdentityProviderService.GetSigningCertificate"
}
export declare class GetSigningCertificateRequest extends SpeakeasyBase {
    getSigningCertificateRequest: shared.GetSigningCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSigningCertificateXAmzTargetEnum;
}
export declare class GetSigningCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSigningCertificateResponse?: shared.GetSigningCertificateResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
