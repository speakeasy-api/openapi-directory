import { SpeakeasyBase } from "../../../internal/utils";
import { Rotation } from "./rotation";
/**
 * Success
 */
export declare class ListRotationsResult extends SpeakeasyBase {
    nextToken?: string;
    rotations: Rotation[];
}
