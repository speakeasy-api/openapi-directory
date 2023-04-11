import { SpeakeasyBase } from "../../../internal/utils";
import { SourceServer } from "./sourceserver";
/**
 * Success
 */
export declare class DescribeSourceServersResponse extends SpeakeasyBase {
    items?: SourceServer[];
    nextToken?: string;
}
