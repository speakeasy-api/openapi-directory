import { SpeakeasyBase } from "../../../internal/utils";
import { EwsAvailabilityProvider } from "./ewsavailabilityprovider";
import { LambdaAvailabilityProvider } from "./lambdaavailabilityprovider";
export declare class UpdateAvailabilityConfigurationRequest extends SpeakeasyBase {
    domainName: string;
    ewsProvider?: EwsAvailabilityProvider;
    lambdaProvider?: LambdaAvailabilityProvider;
    organizationId: string;
}
