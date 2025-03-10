import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedOrigin } from "./allowedorigin";
import { ApiCredentialLinks } from "./apicredentiallinks";
/**
 * OK - the request has succeeded.
 */
export declare class CreateApiCredentialResponse extends SpeakeasyBase {
    links?: ApiCredentialLinks;
    /**
     * Indicates if the API credential is enabled. Must be set to **true** to use the credential in your integration.
     */
    active: boolean;
    /**
     * List of IP addresses from which your client can make requests.
     *
     * @remarks
     *
     * If the list is empty, we allow requests from any IP.
     * If the list is not empty and we get a request from an IP which is not on the list, you get a security error.
     */
    allowedIpAddresses: string[];
    /**
     * List containing the [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) linked to the API credential.
     */
    allowedOrigins?: AllowedOrigin[];
    /**
     * The API key for the API credential that was created.
     */
    apiKey: string;
    /**
     * Public key used for [client-side authentication](https://docs.adyen.com/development-resources/client-side-authentication). The client key is required for Drop-in and Components integrations.
     */
    clientKey: string;
    /**
     * Description of the API credential.
     */
    description?: string;
    /**
     * Unique identifier of the API credential.
     */
    id: string;
    /**
     * The password for the API credential that was created.
     */
    password: string;
    /**
     * List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential.
     */
    roles: string[];
    /**
     * The name of the [API credential](https://docs.adyen.com/development-resources/api-credentials), for example **ws@Company.TestCompany**.
     */
    username: string;
}
