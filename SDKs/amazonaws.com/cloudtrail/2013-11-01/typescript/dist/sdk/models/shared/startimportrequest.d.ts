import { SpeakeasyBase } from "../../../internal/utils";
import { ImportSource } from "./importsource";
export declare class StartImportRequest extends SpeakeasyBase {
    destinations?: string[];
    endEventTime?: Date;
    importId?: string;
    importSource?: ImportSource;
    startEventTime?: Date;
}
