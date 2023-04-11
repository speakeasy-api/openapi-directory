import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMerchantApiCredentialRequest extends SpeakeasyBase {
    /**
     * Indicates if the API credential is enabled.
     */
    active?: boolean;
    /**
     * The new list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential.
     */
    allowedOrigins?: string[];
    /**
     * Description of the API credential.
     */
    description?: string;
    /**
     * List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential.
     */
    roles?: string[];
}
