import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The trust anchor type and its related certificate data.
 */
export declare class CreateTrustAnchorRequestBodySource extends SpeakeasyBase {
    sourceData?: shared.SourceData;
    sourceType?: shared.TrustAnchorTypeEnum;
}
export declare class CreateTrustAnchorRequestBody extends SpeakeasyBase {
    /**
     * Specifies whether the trust anchor is enabled.
     */
    enabled?: boolean;
    /**
     * The name of the trust anchor.
     */
    name: string;
    /**
     * The trust anchor type and its related certificate data.
     */
    source: CreateTrustAnchorRequestBodySource;
    /**
     * The tags to attach to the trust anchor.
     */
    tags?: shared.Tag[];
}
export declare class CreateTrustAnchorRequest extends SpeakeasyBase {
    requestBody: CreateTrustAnchorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateTrustAnchorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    trustAnchorDetailResponse?: shared.TrustAnchorDetailResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
