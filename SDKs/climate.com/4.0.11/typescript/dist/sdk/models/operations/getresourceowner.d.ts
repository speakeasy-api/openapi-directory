import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourceOwnerSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class GetResourceOwnerRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the resource owner.
     */
    resourceOwnerId: string;
}
export declare class GetResourceOwnerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    resourceOwner?: shared.ResourceOwner;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
