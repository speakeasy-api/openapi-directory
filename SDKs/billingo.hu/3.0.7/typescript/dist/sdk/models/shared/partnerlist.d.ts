import { SpeakeasyBase } from "../../../internal/utils";
import { Partner } from "./partner";
/**
 * A object with a data property that contains an array of up to limit partners. Each entry in the array is a separate partner object. If no more partners are available, the resulting array will be empty.
 */
export declare class PartnerList extends SpeakeasyBase {
    currentPage?: number;
    data?: Partner[];
    lastPage?: number;
    nextPageUrl?: string;
    perPage?: number;
    prevPageUrl?: string;
    total?: number;
}
