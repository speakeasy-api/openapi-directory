import { SpeakeasyBase } from "../../../internal/utils";
import { IPSet } from "./ipset";
/**
 * Success
 */
export declare class CreateIPSetResponse extends SpeakeasyBase {
    changeToken?: string;
    ipSet?: IPSet;
}
