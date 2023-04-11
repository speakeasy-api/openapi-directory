import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error Response defined as in Section 5.2 of OAuth 2.0 [RFC6749].
 *
 * @remarks
 *
 */
export declare class OAuth2Error extends SpeakeasyBase {
    error: string;
    errorDescription?: string;
}
