import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCertificateAuthorityAuditReportXAmzTargetEnum {
    ACMPrivateCADescribeCertificateAuthorityAuditReport = "ACMPrivateCA.DescribeCertificateAuthorityAuditReport"
}
export declare class DescribeCertificateAuthorityAuditReportRequest extends SpeakeasyBase {
    describeCertificateAuthorityAuditReportRequest: shared.DescribeCertificateAuthorityAuditReportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCertificateAuthorityAuditReportXAmzTargetEnum;
}
export declare class DescribeCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCertificateAuthorityAuditReportResponse?: shared.DescribeCertificateAuthorityAuditReportResponse;
    /**
     * InvalidArgsException
     */
    invalidArgsException?: any;
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
