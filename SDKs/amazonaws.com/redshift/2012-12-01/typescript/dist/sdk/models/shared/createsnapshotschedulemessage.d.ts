import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateSnapshotScheduleMessage extends SpeakeasyBase {
    dryRun?: boolean;
    nextInvocations?: number;
    scheduleDefinitions?: string[];
    scheduleDescription?: string;
    scheduleIdentifier?: string;
    tags?: TagList[];
}
