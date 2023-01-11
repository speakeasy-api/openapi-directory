import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessedUpdateActionList } from "./processedupdateactionlist";
import { UnprocessedUpdateActionList } from "./unprocessedupdateactionlist";
export declare class UpdateActionResultsMessage extends SpeakeasyBase {
    processedUpdateActions?: ProcessedUpdateActionList[];
    unprocessedUpdateActions?: UnprocessedUpdateActionList[];
}
