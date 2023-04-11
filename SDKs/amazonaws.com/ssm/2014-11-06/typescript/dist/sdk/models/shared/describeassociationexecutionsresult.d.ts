import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationExecution } from "./associationexecution";
/**
 * Success
 */
export declare class DescribeAssociationExecutionsResult extends SpeakeasyBase {
    associationExecutions?: AssociationExecution[];
    nextToken?: string;
}
