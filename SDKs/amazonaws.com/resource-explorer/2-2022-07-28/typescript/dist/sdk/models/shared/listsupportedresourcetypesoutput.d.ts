import { SpeakeasyBase } from "../../../internal/utils";
import { SupportedResourceType } from "./supportedresourcetype";
/**
 * Success
 */
export declare class ListSupportedResourceTypesOutput extends SpeakeasyBase {
    nextToken?: string;
    resourceTypes?: SupportedResourceType[];
}
