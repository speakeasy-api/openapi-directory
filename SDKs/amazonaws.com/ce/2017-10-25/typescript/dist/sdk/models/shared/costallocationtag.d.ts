import { SpeakeasyBase } from "../../../internal/utils";
import { CostAllocationTagStatusEnum } from "./costallocationtagstatusenum";
import { CostAllocationTagTypeEnum } from "./costallocationtagtypeenum";
/**
 * The cost allocation tag structure. This includes detailed metadata for the <code>CostAllocationTag</code> object.
 */
export declare class CostAllocationTag extends SpeakeasyBase {
    status: CostAllocationTagStatusEnum;
    tagKey: string;
    type: CostAllocationTagTypeEnum;
}
