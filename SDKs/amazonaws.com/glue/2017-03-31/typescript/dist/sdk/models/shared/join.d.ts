import { SpeakeasyBase } from "../../../internal/utils";
import { JoinColumn } from "./joincolumn";
import { JoinTypeEnum } from "./jointypeenum";
/**
 * Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins.
 */
export declare class Join extends SpeakeasyBase {
    columns: JoinColumn[];
    inputs: string[];
    joinType: JoinTypeEnum;
    name: string;
}
