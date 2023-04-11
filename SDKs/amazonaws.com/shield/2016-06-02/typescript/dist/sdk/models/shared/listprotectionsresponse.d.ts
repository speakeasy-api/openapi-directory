import { SpeakeasyBase } from "../../../internal/utils";
import { Protection } from "./protection";
/**
 * Success
 */
export declare class ListProtectionsResponse extends SpeakeasyBase {
    nextToken?: string;
    protections?: Protection[];
}
