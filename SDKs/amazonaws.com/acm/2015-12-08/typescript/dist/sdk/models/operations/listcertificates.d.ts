import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCertificatesXAmzTargetEnum {
    CertificateManagerListCertificates = "CertificateManager.ListCertificates"
}
export declare class ListCertificatesRequest extends SpeakeasyBase {
    listCertificatesRequest: shared.ListCertificatesRequest;
    /**
     * Pagination limit
     */
    maxItems?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCertificatesXAmzTargetEnum;
}
export declare class ListCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArgsException
     */
    invalidArgsException?: any;
    /**
     * Success
     */
    listCertificatesResponse?: shared.ListCertificatesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
