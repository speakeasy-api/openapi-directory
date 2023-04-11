import { SpeakeasyBase } from "../../../internal/utils";
import { Component } from "./component";
/**
 * Success
 */
export declare class ListComponentsResponse extends SpeakeasyBase {
    components?: Component[];
    nextToken?: string;
}
