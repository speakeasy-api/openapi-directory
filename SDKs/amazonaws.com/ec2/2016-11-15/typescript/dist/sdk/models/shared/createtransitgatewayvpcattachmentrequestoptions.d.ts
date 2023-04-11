import { SpeakeasyBase } from "../../../internal/utils";
import { ApplianceModeSupportValueEnum } from "./appliancemodesupportvalueenum";
import { DnsSupportValueEnum } from "./dnssupportvalueenum";
import { Ipv6SupportValueEnum } from "./ipv6supportvalueenum";
/**
 * Describes the options for a VPC attachment.
 */
export declare class CreateTransitGatewayVpcAttachmentRequestOptions extends SpeakeasyBase {
    applianceModeSupport?: ApplianceModeSupportValueEnum;
    dnsSupport?: DnsSupportValueEnum;
    ipv6Support?: Ipv6SupportValueEnum;
}
