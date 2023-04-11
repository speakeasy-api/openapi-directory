import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceInfo } from "./resourceinfo";
/**
 * Success
 */
export declare class ListAssociatedResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    resources?: ResourceInfo[];
}
