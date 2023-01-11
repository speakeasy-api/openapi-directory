import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateList } from "./serviceupdatelist";



export class ServiceUpdatesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ServiceUpdateList })
  serviceUpdates?: ServiceUpdateList[];
}
