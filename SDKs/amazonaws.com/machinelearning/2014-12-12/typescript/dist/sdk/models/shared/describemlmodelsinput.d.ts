import { SpeakeasyBase } from "../../../internal/utils";
import { MLModelFilterVariableEnum } from "./mlmodelfiltervariableenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class DescribeMLModelsInput extends SpeakeasyBase {
    eq?: string;
    filterVariable?: MLModelFilterVariableEnum;
    ge?: string;
    gt?: string;
    le?: string;
    lt?: string;
    limit?: number;
    ne?: string;
    nextToken?: string;
    prefix?: string;
    sortOrder?: SortOrderEnum;
}
