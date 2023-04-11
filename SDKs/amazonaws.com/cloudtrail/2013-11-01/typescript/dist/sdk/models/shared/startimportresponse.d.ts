import { SpeakeasyBase } from "../../../internal/utils";
import { ImportSource } from "./importsource";
import { ImportStatusEnum } from "./importstatusenum";
/**
 * Success
 */
export declare class StartImportResponse extends SpeakeasyBase {
    createdTimestamp?: Date;
    destinations?: string[];
    endEventTime?: Date;
    importId?: string;
    importSource?: ImportSource;
    importStatus?: ImportStatusEnum;
    startEventTime?: Date;
    updatedTimestamp?: Date;
}
