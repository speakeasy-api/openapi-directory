import { SpeakeasyBase } from "../../../internal/utils";
import { RequestFilterPortRange } from "./requestfilterportrange";
/**
 * Describes a set of filters for a path analysis. Use path filters to scope the analysis when there can be multiple resulting paths.
 */
export declare class PathRequestFilter extends SpeakeasyBase {
    destinationAddress?: string;
    destinationPortRange?: RequestFilterPortRange;
    sourceAddress?: string;
    sourcePortRange?: RequestFilterPortRange;
}
