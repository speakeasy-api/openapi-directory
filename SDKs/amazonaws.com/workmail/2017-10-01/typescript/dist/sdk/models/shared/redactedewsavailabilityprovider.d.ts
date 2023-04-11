import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an EWS based availability provider when returned from the service. It does not contain the password of the endpoint.
 */
export declare class RedactedEwsAvailabilityProvider extends SpeakeasyBase {
    ewsEndpoint?: string;
    ewsUsername?: string;
}
