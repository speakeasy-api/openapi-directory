import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Describes an IP range used in a security group.
 */
export declare class IPRangeList extends SpeakeasyBase {
    cidrip?: string;
    status?: string;
    tags?: TagList[];
}
