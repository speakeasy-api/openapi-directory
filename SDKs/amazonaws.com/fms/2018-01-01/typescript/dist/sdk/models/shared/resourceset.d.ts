import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of resources to include in a policy.
 */
export declare class ResourceSet extends SpeakeasyBase {
    description?: string;
    id?: string;
    lastUpdateTime?: Date;
    name: string;
    resourceTypeList: string[];
    updateToken?: string;
}
