import { SpeakeasyBase } from "../../../internal/utils";
import { Eula } from "./eula";
/**
 * Success
 */
export declare class ListEulasResponse extends SpeakeasyBase {
    eulas?: Eula[];
    nextToken?: string;
}
