import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceMapping } from "./resourcemapping";
/**
 * Success
 */
export declare class AddDraftAppVersionResourceMappingsResponse extends SpeakeasyBase {
    appArn: string;
    appVersion: string;
    resourceMappings: ResourceMapping[];
}
