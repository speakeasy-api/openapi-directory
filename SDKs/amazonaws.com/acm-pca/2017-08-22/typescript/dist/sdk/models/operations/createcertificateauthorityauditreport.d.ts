import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCertificateAuthorityAuditReportXAmzTargetEnum {
    ACMPrivateCACreateCertificateAuthorityAuditReport = "ACMPrivateCA.CreateCertificateAuthorityAuditReport"
}
export declare class CreateCertificateAuthorityAuditReportRequest extends SpeakeasyBase {
    createCertificateAuthorityAuditReportRequest: shared.CreateCertificateAuthorityAuditReportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCertificateAuthorityAuditReportXAmzTargetEnum;
}
export declare class CreateCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCertificateAuthorityAuditReportResponse?: shared.CreateCertificateAuthorityAuditReportResponse;
    /**
     * InvalidArgsException
     */
    invalidArgsException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * RequestFailedException
     */
    requestFailedException?: any;
    /**
     * RequestInProgressException
     */
    requestInProgressException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
