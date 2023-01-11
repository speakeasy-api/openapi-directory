import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessedUpdateActionList } from "./processedupdateactionlist";
import { UnprocessedUpdateActionList } from "./unprocessedupdateactionlist";



export class UpdateActionResultsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProcessedUpdateActionList })
  processedUpdateActions?: ProcessedUpdateActionList[];

  @SpeakeasyMetadata({ elemType: UnprocessedUpdateActionList })
  unprocessedUpdateActions?: UnprocessedUpdateActionList[];
}
