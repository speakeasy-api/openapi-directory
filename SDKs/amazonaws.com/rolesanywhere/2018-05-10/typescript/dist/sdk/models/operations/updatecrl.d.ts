import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCrlRequestBody extends SpeakeasyBase {
    /**
     * The x509 v3 specified certificate revocation list
     */
    crlData?: string;
    /**
     * The name of the Crl.
     */
    name?: string;
}
export declare class UpdateCrlRequest extends SpeakeasyBase {
    requestBody: UpdateCrlRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the certificate revocation list (CRL).
     */
    crlId: string;
}
export declare class UpdateCrlResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    crlDetailResponse?: shared.CrlDetailResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
