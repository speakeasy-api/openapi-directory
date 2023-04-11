import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The trust anchor type and its related certificate data.
 */
export declare class UpdateTrustAnchorRequestBodySource extends SpeakeasyBase {
    sourceData?: shared.SourceData;
    sourceType?: shared.TrustAnchorTypeEnum;
}
export declare class UpdateTrustAnchorRequestBody extends SpeakeasyBase {
    /**
     * The name of the trust anchor.
     */
    name?: string;
    /**
     * The trust anchor type and its related certificate data.
     */
    source?: UpdateTrustAnchorRequestBodySource;
}
export declare class UpdateTrustAnchorRequest extends SpeakeasyBase {
    requestBody: UpdateTrustAnchorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the trust anchor.
     */
    trustAnchorId: string;
}
export declare class UpdateTrustAnchorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    trustAnchorDetailResponse?: shared.TrustAnchorDetailResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
