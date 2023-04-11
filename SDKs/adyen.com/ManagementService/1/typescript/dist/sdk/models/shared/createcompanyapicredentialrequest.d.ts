import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateCompanyApiCredentialRequest extends SpeakeasyBase {
    /**
     * List of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the new API credential.
     */
    allowedOrigins?: string[];
    /**
     * List of merchant accounts that the API credential has access to.
     */
    associatedMerchantAccounts?: string[];
    /**
     * Description of the API credential.
     */
    description?: string;
    /**
     * List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) of the API credential.
     */
    roles?: string[];
}
