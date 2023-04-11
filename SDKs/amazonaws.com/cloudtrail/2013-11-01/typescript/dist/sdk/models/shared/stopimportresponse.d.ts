import { SpeakeasyBase } from "../../../internal/utils";
import { ImportSource } from "./importsource";
import { ImportStatistics } from "./importstatistics";
import { ImportStatusEnum } from "./importstatusenum";
/**
 * Success
 */
export declare class StopImportResponse extends SpeakeasyBase {
    createdTimestamp?: Date;
    destinations?: string[];
    endEventTime?: Date;
    importId?: string;
    importSource?: ImportSource;
    importStatistics?: ImportStatistics;
    importStatus?: ImportStatusEnum;
    startEventTime?: Date;
    updatedTimestamp?: Date;
}
