import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCertificatesByCARequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the CA certificate. This operation will list all registered device certificate that were signed by this CA certificate.
     */
    caCertificateId: string;
    /**
     * Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
     */
    isAscendingOrder?: boolean;
    /**
     * The marker for the next set of results.
     */
    marker?: string;
    /**
     * The result page size.
     */
    pageSize?: number;
}
export declare class ListCertificatesByCAResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listCertificatesByCAResponse?: shared.ListCertificatesByCAResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
