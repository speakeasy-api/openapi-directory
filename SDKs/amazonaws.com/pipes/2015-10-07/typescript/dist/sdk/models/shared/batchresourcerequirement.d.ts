import { SpeakeasyBase } from "../../../internal/utils";
import { BatchResourceRequirementTypeEnum } from "./batchresourcerequirementtypeenum";
/**
 * The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.
 */
export declare class BatchResourceRequirement extends SpeakeasyBase {
    type: BatchResourceRequirementTypeEnum;
    value: string;
}
