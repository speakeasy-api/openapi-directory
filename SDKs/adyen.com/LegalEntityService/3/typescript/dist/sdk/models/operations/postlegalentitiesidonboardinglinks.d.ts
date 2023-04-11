import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostLegalEntitiesIdOnboardingLinksSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostLegalEntitiesIdOnboardingLinksRequest extends SpeakeasyBase {
    onboardingLinkInfo?: shared.OnboardingLinkInfo;
    /**
     * The unique identifier of the legal entity
     */
    id: string;
}
export declare class PostLegalEntitiesIdOnboardingLinksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    onboardingLink?: shared.OnboardingLink;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
