import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerObjectSyncStatusEnum } from "./perobjectsyncstatusenum";



export class PerObjectStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SyncStatus" })
  syncStatus?: PerObjectSyncStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
