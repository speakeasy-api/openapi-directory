import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCertificateXAmzTargetEnum {
    DirectoryService20150416DescribeCertificate = "DirectoryService_20150416.DescribeCertificate"
}
export declare class DescribeCertificateRequest extends SpeakeasyBase {
    describeCertificateRequest: shared.DescribeCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCertificateXAmzTargetEnum;
}
export declare class DescribeCertificateResponse extends SpeakeasyBase {
    /**
     * CertificateDoesNotExistException
     */
    certificateDoesNotExistException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeCertificateResult?: shared.DescribeCertificateResult;
    /**
     * DirectoryDoesNotExistException
     */
    directoryDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
