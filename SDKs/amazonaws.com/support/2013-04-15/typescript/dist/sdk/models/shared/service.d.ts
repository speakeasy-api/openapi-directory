import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
/**
 * Information about an Amazon Web Services service returned by the <a>DescribeServices</a> operation.
 */
export declare class Service extends SpeakeasyBase {
    categories?: Category[];
    code?: string;
    name?: string;
}
