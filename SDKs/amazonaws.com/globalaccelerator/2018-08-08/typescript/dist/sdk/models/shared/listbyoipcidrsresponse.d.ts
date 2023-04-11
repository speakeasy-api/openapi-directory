import { SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";
/**
 * Success
 */
export declare class ListByoipCidrsResponse extends SpeakeasyBase {
    byoipCidrs?: ByoipCidr[];
    nextToken?: string;
}
