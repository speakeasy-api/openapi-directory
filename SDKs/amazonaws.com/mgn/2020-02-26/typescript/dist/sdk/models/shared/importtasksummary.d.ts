import { SpeakeasyBase } from "../../../internal/utils";
import { ImportTaskSummaryApplications } from "./importtasksummaryapplications";
import { ImportTaskSummaryServers } from "./importtasksummaryservers";
import { ImportTaskSummaryWaves } from "./importtasksummarywaves";
/**
 * Import task summary.
 */
export declare class ImportTaskSummary extends SpeakeasyBase {
    applications?: ImportTaskSummaryApplications;
    servers?: ImportTaskSummaryServers;
    waves?: ImportTaskSummaryWaves;
}
