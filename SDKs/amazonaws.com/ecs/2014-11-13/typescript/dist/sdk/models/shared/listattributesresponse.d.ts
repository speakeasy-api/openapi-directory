import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
/**
 * Success
 */
export declare class ListAttributesResponse extends SpeakeasyBase {
    attributes?: Attribute[];
    nextToken?: string;
}
