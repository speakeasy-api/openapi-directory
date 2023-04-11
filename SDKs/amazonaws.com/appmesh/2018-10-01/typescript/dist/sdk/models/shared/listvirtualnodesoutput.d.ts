import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeRef } from "./virtualnoderef";
/**
 * Success
 */
export declare class ListVirtualNodesOutput extends SpeakeasyBase {
    nextToken?: string;
    virtualNodes: VirtualNodeRef[];
}
