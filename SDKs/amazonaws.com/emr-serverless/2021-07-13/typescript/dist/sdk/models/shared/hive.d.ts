import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configurations for the Hive job driver.
 */
export declare class Hive extends SpeakeasyBase {
    initQueryFile?: string;
    parameters?: string;
    query: string;
}
