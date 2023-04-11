import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderEnum } from "./identityproviderenum";
import { PublisherStatusEnum } from "./publisherstatusenum";
/**
 * Success
 */
export declare class DescribePublisherOutput extends SpeakeasyBase {
    identityProvider?: IdentityProviderEnum;
    publisherId?: string;
    publisherProfile?: string;
    publisherStatus?: PublisherStatusEnum;
}
