import { SpeakeasyBase } from "../../../internal/utils";
import { Edge } from "./edge";
import { Vertex } from "./vertex";
/**
 * Success
 */
export declare class QueryLineageResponse extends SpeakeasyBase {
    edges?: Edge[];
    nextToken?: string;
    vertices?: Vertex[];
}
