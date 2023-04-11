import { SpeakeasyBase } from "../../../internal/utils";
import { WorkUnitRange } from "./workunitrange";
/**
 * A structure for the output.
 */
export declare class GetWorkUnitsResponse extends SpeakeasyBase {
    nextToken?: string;
    queryId: string;
    workUnitRanges: WorkUnitRange[];
}
