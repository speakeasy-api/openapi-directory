import { SpeakeasyBase } from "../../../internal/utils";
import { Blueprint } from "./blueprint";
/**
 * Success
 */
export declare class BatchGetBlueprintsResponse extends SpeakeasyBase {
    blueprints?: Blueprint[];
    missingBlueprints?: string[];
}
