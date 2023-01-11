import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackList } from "./tracklist";



export class TrackListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TrackList })
  maintenanceTracks?: TrackList[];

  @SpeakeasyMetadata()
  marker?: string;
}
