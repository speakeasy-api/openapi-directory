import { SpeakeasyBase } from "../../../internal/utils";
/**
 * API Restrictions on the allowed actions, resources, and referers for an API key resource.
 */
export declare class ApiKeyRestrictions extends SpeakeasyBase {
    allowActions: string[];
    allowReferers?: string[];
    allowResources: string[];
}
