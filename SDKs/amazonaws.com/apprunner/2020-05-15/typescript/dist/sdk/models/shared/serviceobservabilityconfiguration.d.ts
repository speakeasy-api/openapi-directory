import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the observability configuration of an App Runner service. These are additional observability features, like tracing, that you choose to enable. They're configured in a separate resource that you associate with your service.
 */
export declare class ServiceObservabilityConfiguration extends SpeakeasyBase {
    observabilityConfigurationArn?: string;
    observabilityEnabled: boolean;
}
