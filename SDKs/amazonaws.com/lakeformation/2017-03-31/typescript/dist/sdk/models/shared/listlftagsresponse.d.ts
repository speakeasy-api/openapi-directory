import { SpeakeasyBase } from "../../../internal/utils";
import { LFTagPair } from "./lftagpair";
/**
 * Success
 */
export declare class ListLFTagsResponse extends SpeakeasyBase {
    lfTags?: LFTagPair[];
    nextToken?: string;
}
