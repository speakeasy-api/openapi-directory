import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackedClick } from "./trackedclick";



export class TrackedClicks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clicks", elemType: TrackedClick })
  clicks: TrackedClick[];
}
