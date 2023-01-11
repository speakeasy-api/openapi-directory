import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { PerObjectStatus } from "./perobjectstatus";



export class SyncState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attachment" })
  attachment?: Attachment;

  @SpeakeasyMetadata({ data: "json, name=Config", elemType: PerObjectStatus })
  config?: Record<string, PerObjectStatus>;
}
