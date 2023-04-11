import { SpeakeasyBase } from "../../../internal/utils";
import { EwsAvailabilityProvider } from "./ewsavailabilityprovider";
import { LambdaAvailabilityProvider } from "./lambdaavailabilityprovider";
export declare class TestAvailabilityConfigurationRequest extends SpeakeasyBase {
    domainName?: string;
    /**
     * Describes an EWS based availability provider. This is only used as input to the service.
     */
    ewsProvider?: EwsAvailabilityProvider;
    /**
     * Describes a Lambda based availability provider.
     */
    lambdaProvider?: LambdaAvailabilityProvider;
    organizationId: string;
}
