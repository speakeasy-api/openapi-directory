import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateMerchantApiCredentialRequest extends SpeakeasyBase {
    /**
     * The list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the new API credential.
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
