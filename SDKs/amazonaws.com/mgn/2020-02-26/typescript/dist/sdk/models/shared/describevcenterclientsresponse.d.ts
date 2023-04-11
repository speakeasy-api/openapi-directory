import { SpeakeasyBase } from "../../../internal/utils";
import { VcenterClient } from "./vcenterclient";
/**
 * Success
 */
export declare class DescribeVcenterClientsResponse extends SpeakeasyBase {
    items?: VcenterClient[];
    nextToken?: string;
}
