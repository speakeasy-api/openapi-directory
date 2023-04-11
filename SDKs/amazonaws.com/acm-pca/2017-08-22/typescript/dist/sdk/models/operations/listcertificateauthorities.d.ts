import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCertificateAuthoritiesXAmzTargetEnum {
    ACMPrivateCAListCertificateAuthorities = "ACMPrivateCA.ListCertificateAuthorities"
}
export declare class ListCertificateAuthoritiesRequest extends SpeakeasyBase {
    listCertificateAuthoritiesRequest: shared.ListCertificateAuthoritiesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
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
    xAmzTarget: ListCertificateAuthoritiesXAmzTargetEnum;
}
export declare class ListCertificateAuthoritiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listCertificateAuthoritiesResponse?: shared.ListCertificateAuthoritiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
