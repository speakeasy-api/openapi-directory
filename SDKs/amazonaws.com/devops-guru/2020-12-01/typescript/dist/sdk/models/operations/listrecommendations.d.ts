import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A locale that specifies the language to use for recommendations.
 */
export declare enum ListRecommendationsRequestBodyLocaleEnum {
    DeDe = "DE_DE",
    EnUs = "EN_US",
    EnGb = "EN_GB",
    EsEs = "ES_ES",
    FrFr = "FR_FR",
    ItIt = "IT_IT",
    JaJp = "JA_JP",
    KoKr = "KO_KR",
    PtBr = "PT_BR",
    ZhCn = "ZH_CN",
    ZhTw = "ZH_TW"
}
export declare class ListRecommendationsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Amazon Web Services account.
     */
    accountId?: string;
    /**
     *  The ID of the requested insight.
     */
    insightId: string;
    /**
     * A locale that specifies the language to use for recommendations.
     */
    locale?: ListRecommendationsRequestBodyLocaleEnum;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    nextToken?: string;
}
export declare class ListRecommendationsRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListRecommendationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listRecommendationsResponse?: shared.ListRecommendationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
