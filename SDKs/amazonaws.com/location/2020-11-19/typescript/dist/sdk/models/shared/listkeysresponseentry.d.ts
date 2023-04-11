import { SpeakeasyBase } from "../../../internal/utils";
import { ApiKeyRestrictions } from "./apikeyrestrictions";
/**
 * An API key resource listed in your Amazon Web Services account.
 */
export declare class ListKeysResponseEntry extends SpeakeasyBase {
    createTime: Date;
    description?: string;
    expireTime: Date;
    keyName: string;
    /**
     * API Restrictions on the allowed actions, resources, and referers for an API key resource.
     */
    restrictions: ApiKeyRestrictions;
    updateTime: Date;
}
