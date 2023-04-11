import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
import { ResourceCount } from "./resourcecount";
/**
 * Success
 */
export declare class SearchOutput extends SpeakeasyBase {
    count?: ResourceCount;
    nextToken?: string;
    resources?: Resource[];
    viewArn?: string;
}
