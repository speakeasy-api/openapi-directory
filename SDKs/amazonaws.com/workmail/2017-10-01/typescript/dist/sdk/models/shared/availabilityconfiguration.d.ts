import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityProviderTypeEnum } from "./availabilityprovidertypeenum";
import { LambdaAvailabilityProvider } from "./lambdaavailabilityprovider";
import { RedactedEwsAvailabilityProvider } from "./redactedewsavailabilityprovider";
/**
 * List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.
 */
export declare class AvailabilityConfiguration extends SpeakeasyBase {
    dateCreated?: Date;
    dateModified?: Date;
    domainName?: string;
    ewsProvider?: RedactedEwsAvailabilityProvider;
    lambdaProvider?: LambdaAvailabilityProvider;
    providerType?: AvailabilityProviderTypeEnum;
}
