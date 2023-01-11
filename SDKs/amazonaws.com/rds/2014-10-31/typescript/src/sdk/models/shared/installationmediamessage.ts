import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstallationMediaList } from "./installationmedialist";



export class InstallationMediaMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstallationMediaList })
  installationMedia?: InstallationMediaList[];

  @SpeakeasyMetadata()
  marker?: string;
}
