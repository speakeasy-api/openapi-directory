import { SpeakeasyBase } from "../../../internal/utils";
import { QueryStateStringEnum } from "./querystatestringenum";
/**
 * A structure for the output.
 */
export declare class GetQueryStateResponse extends SpeakeasyBase {
    error?: string;
    state: QueryStateStringEnum;
}
