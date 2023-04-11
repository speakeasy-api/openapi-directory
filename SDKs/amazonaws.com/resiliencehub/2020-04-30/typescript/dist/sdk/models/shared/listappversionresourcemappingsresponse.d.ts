import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceMapping } from "./resourcemapping";
/**
 * Success
 */
export declare class ListAppVersionResourceMappingsResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceMappings: ResourceMapping[];
}
