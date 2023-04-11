import { SpeakeasyBase } from "../../../internal/utils";
import { NodeRangeProperty } from "./noderangeproperty";
/**
 * <p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>Node properties can't be specified for Amazon EKS based job definitions.</p> </note>
 */
export declare class NodeProperties extends SpeakeasyBase {
    mainNode: number;
    nodeRangeProperties: NodeRangeProperty[];
    numNodes: number;
}
