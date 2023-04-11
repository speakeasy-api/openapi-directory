import { SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";
/**
 * Success
 */
export declare class ListPrincipalsResponse extends SpeakeasyBase {
    nextToken?: string;
    principals?: Principal[];
}
