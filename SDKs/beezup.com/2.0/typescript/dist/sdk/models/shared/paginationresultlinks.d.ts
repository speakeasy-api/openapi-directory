import { SpeakeasyBase } from "../../../internal/utils";
import { Link3 } from "./link3";
/**
 * The navigation links 'first', 'last', 'next', 'previous'
 */
export declare class PaginationResultLinks extends SpeakeasyBase {
    first: Link3;
    last: Link3;
    next?: Link3;
    previous?: Link3;
}
