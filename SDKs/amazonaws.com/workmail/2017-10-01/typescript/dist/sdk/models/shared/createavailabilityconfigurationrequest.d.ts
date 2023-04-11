import { SpeakeasyBase } from "../../../internal/utils";
import { EwsAvailabilityProvider } from "./ewsavailabilityprovider";
import { LambdaAvailabilityProvider } from "./lambdaavailabilityprovider";
export declare class CreateAvailabilityConfigurationRequest extends SpeakeasyBase {
    clientToken?: string;
    domainName: string;
    ewsProvider?: EwsAvailabilityProvider;
    lambdaProvider?: LambdaAvailabilityProvider;
    organizationId: string;
}
