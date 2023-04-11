import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportCrlRequestBody extends SpeakeasyBase {
    /**
     * The x509 v3 specified certificate revocation list
     */
    crlData: string;
    /**
     * Specifies whether the certificate revocation list (CRL) is enabled.
     */
    enabled?: boolean;
    /**
     * The name of the certificate revocation list (CRL).
     */
    name: string;
    /**
     * A list of tags to attach to the certificate revocation list (CRL).
     */
    tags?: shared.Tag[];
    /**
     * The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for.
     */
    trustAnchorArn: string;
}
export declare class ImportCrlRequest extends SpeakeasyBase {
    requestBody: ImportCrlRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportCrlResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    crlDetailResponse?: shared.CrlDetailResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
