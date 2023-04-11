import { SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { BGPPeerStateEnum } from "./bgppeerstateenum";
import { BGPStatusEnum } from "./bgpstatusenum";
/**
 * Information about a BGP peer.
 */
export declare class BGPPeer extends SpeakeasyBase {
    addressFamily?: AddressFamilyEnum;
    amazonAddress?: string;
    asn?: number;
    authKey?: string;
    awsDeviceV2?: string;
    awsLogicalDeviceId?: string;
    bgpPeerId?: string;
    bgpPeerState?: BGPPeerStateEnum;
    bgpStatus?: BGPStatusEnum;
    customerAddress?: string;
}
