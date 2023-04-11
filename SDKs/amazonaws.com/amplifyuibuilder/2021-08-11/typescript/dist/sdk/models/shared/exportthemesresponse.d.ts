import { SpeakeasyBase } from "../../../internal/utils";
import { Theme } from "./theme";
/**
 * Success
 */
export declare class ExportThemesResponse extends SpeakeasyBase {
    entities: Theme[];
    nextToken?: string;
}
