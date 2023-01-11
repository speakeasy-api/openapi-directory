import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewBgpPeer } from "./newbgppeer";



export class CreateBgpPeerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newBGPPeer" })
  newBGPPeer?: NewBgpPeer;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;
}
