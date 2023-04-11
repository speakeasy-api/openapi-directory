import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The exclusion filter
 */
export declare class ExclusionFilter extends SpeakeasyBase {
    /**
     * The channel column identifier
     */
    channelColumnId: string;
    /**
     * indicates if the filter is currently enable.
     */
    enabled: boolean;
    /**
     * Indicate the filter's group. All filters in the same group means an "AND" operation in the filter group
     */
    groupId: string;
    /**
     * The exclusion filter name
     */
    name: string;
    /**
     * The exclusion filter operator name
     */
    operatorName: string;
    /**
     * The position of the exclusion filter
     */
    position: number;
    /**
     * Indicate the filter group position. This information is used for the UI purpose and must be unique in the filter group.
     */
    positionInGroup: number;
    /**
     * The value indicate by the user when the filter operation requires it.
     */
    value?: string;
}
