import { SpeakeasyBase } from "../../../internal/utils";
import { Workgroup } from "./workgroup";
/**
 * Success
 */
export declare class ListWorkgroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    workgroups: Workgroup[];
}
