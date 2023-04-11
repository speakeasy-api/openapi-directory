import { SpeakeasyBase } from "../../../internal/utils";
import { MatchRange } from "./matchrange";
/**
 * An object representing the method header to be matched.
 */
export declare class GrpcMetadataMatchMethod extends SpeakeasyBase {
    exact?: string;
    prefix?: string;
    /**
     * An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
     */
    range?: MatchRange;
    regex?: string;
    suffix?: string;
}
