import { SpeakeasyBase } from "../../../internal/utils";
import { CostAllocationTagStatusEnum } from "./costallocationtagstatusenum";
/**
 * The cost allocation tag status. The status of a key can either be active or inactive.
 */
export declare class CostAllocationTagStatusEntry extends SpeakeasyBase {
    status: CostAllocationTagStatusEnum;
    tagKey: string;
}
