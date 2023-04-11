import { SpeakeasyBase } from "../../../internal/utils";
import { Child } from "./child";
/**
 * Success
 */
export declare class ListChildrenResponse extends SpeakeasyBase {
    children?: Child[];
    nextToken?: string;
}
