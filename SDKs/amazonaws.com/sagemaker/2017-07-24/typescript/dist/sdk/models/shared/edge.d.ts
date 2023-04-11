import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";
/**
 * A directed edge connecting two lineage entities.
 */
export declare class Edge extends SpeakeasyBase {
    associationType?: AssociationEdgeTypeEnum;
    destinationArn?: string;
    sourceArn?: string;
}
