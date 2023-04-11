import { SpeakeasyBase } from "../../../internal/utils";
import { UnionTypeEnum } from "./uniontypeenum";
/**
 * Specifies a transform that combines the rows from two or more datasets into a single result.
 */
export declare class Union extends SpeakeasyBase {
    inputs: string[];
    name: string;
    unionType: UnionTypeEnum;
}
