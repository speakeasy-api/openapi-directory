import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an EWS based availability provider. This is only used as input to the service.
 */
export declare class EwsAvailabilityProvider extends SpeakeasyBase {
    ewsEndpoint: string;
    ewsPassword: string;
    ewsUsername: string;
}
