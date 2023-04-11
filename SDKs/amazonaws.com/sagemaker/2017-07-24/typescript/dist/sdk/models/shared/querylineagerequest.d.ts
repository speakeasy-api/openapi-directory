import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { QueryFilters } from "./queryfilters";
export declare class QueryLineageRequest extends SpeakeasyBase {
    direction?: DirectionEnum;
    filters?: QueryFilters;
    includeEdges?: boolean;
    maxDepth?: number;
    maxResults?: number;
    nextToken?: string;
    startArns?: string[];
}
