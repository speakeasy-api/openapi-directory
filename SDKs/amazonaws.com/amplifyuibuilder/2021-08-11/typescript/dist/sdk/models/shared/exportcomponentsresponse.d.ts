import { SpeakeasyBase } from "../../../internal/utils";
import { Component } from "./component";
/**
 * Success
 */
export declare class ExportComponentsResponse extends SpeakeasyBase {
    entities: Component[];
    nextToken?: string;
}
