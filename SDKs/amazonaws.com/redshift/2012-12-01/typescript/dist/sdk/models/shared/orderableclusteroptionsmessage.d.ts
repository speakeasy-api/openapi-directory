import { SpeakeasyBase } from "../../../internal/utils";
import { OrderableClusterOptionsList } from "./orderableclusteroptionslist";
/**
 * Contains the output from the <a>DescribeOrderableClusterOptions</a> action.
 */
export declare class OrderableClusterOptionsMessage extends SpeakeasyBase {
    marker?: string;
    orderableClusterOptions?: OrderableClusterOptionsList[];
}
