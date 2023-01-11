import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportTasksList } from "./exporttaskslist";



export class ExportTasksMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ExportTasksList })
  exportTasks?: ExportTasksList[];

  @SpeakeasyMetadata()
  marker?: string;
}
