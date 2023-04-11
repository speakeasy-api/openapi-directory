import { SpeakeasyBase } from "../../../internal/utils";
import { Acl } from "./acl";
/**
 * Success
 */
export declare class DescribeACLsResponse extends SpeakeasyBase {
    acLs?: Acl[];
    nextToken?: string;
}
