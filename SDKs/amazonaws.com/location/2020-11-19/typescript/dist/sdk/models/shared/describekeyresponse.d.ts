import { SpeakeasyBase } from "../../../internal/utils";
import { ApiKeyRestrictions } from "./apikeyrestrictions";
/**
 * Success
 */
export declare class DescribeKeyResponse extends SpeakeasyBase {
    createTime: Date;
    description?: string;
    expireTime: Date;
    key: string;
    keyArn: string;
    keyName: string;
    /**
     * API Restrictions on the allowed actions, resources, and referers for an API key resource.
     */
    restrictions: ApiKeyRestrictions;
    tags?: Record<string, string>;
    updateTime: Date;
}
