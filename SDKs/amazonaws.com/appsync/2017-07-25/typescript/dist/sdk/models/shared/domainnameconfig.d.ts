import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a configuration for a custom domain.
 */
export declare class DomainNameConfig extends SpeakeasyBase {
    appsyncDomainName?: string;
    certificateArn?: string;
    description?: string;
    domainName?: string;
    hostedZoneId?: string;
}
