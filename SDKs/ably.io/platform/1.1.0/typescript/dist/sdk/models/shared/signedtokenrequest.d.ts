import { SpeakeasyBase } from "../../../internal/utils";
export declare class SignedTokenRequest extends SpeakeasyBase {
    /**
     * The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.
     */
    capability: Record<string, any>;
    /**
     * The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used.
     */
    clientId?: string;
    /**
     * Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key.
     */
    keyName: string;
    /**
     * A signature, generated as an HMAC of each of the above components, using the key secret value.
     */
    mac: string;
    /**
     * An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused.
     */
    nonce: string;
    /**
     * Time of creation of the Ably TokenRequest.
     */
    timestamp: number;
}
