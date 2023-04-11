import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceInfo } from "./resourceinfo";
/**
 * Success
 */
export declare class ListResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceInfoList?: ResourceInfo[];
}
