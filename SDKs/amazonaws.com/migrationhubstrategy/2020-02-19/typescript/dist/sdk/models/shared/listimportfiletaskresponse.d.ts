import { SpeakeasyBase } from "../../../internal/utils";
import { ImportFileTaskInformation } from "./importfiletaskinformation";
/**
 * Success
 */
export declare class ListImportFileTaskResponse extends SpeakeasyBase {
    nextToken?: string;
    taskInfos?: ImportFileTaskInformation[];
}
