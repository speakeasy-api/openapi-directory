import { SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";
/**
 * Success
 */
export declare class GetTriggersResponse extends SpeakeasyBase {
    nextToken?: string;
    triggers?: Trigger[];
}
