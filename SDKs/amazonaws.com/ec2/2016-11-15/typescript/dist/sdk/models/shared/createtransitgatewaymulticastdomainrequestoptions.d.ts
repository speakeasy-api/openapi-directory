import { SpeakeasyBase } from "../../../internal/utils";
import { AutoAcceptSharedAssociationsValueEnum } from "./autoacceptsharedassociationsvalueenum";
import { Igmpv2SupportValueEnum } from "./igmpv2supportvalueenum";
import { StaticSourcesSupportValueEnum } from "./staticsourcessupportvalueenum";
/**
 * The options for the transit gateway multicast domain.
 */
export declare class CreateTransitGatewayMulticastDomainRequestOptions extends SpeakeasyBase {
    autoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValueEnum;
    igmpv2Support?: Igmpv2SupportValueEnum;
    staticSourcesSupport?: StaticSourcesSupportValueEnum;
}
