import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCertificateAuthorityXAmzTargetEnum {
    ACMPrivateCADescribeCertificateAuthority = "ACMPrivateCA.DescribeCertificateAuthority"
}
export declare class DescribeCertificateAuthorityRequest extends SpeakeasyBase {
    describeCertificateAuthorityRequest: shared.DescribeCertificateAuthorityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCertificateAuthorityXAmzTargetEnum;
}
export declare class DescribeCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCertificateAuthorityResponse?: shared.DescribeCertificateAuthorityResponse;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
