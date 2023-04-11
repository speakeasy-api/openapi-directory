import { SpeakeasyBase } from "../../../internal/utils";
import { AccessRules } from "./accessrules";
import { BucketAccessLogConfig } from "./bucketaccesslogconfig";
import { BucketState } from "./bucketstate";
import { ResourceLocation } from "./resourcelocation";
import { ResourceReceivingAccess } from "./resourcereceivingaccess";
import { Tag } from "./tag";
/**
 * Describes an Amazon Lightsail bucket.
 */
export declare class Bucket extends SpeakeasyBase {
    ableToUpdateBundle?: boolean;
    accessLogConfig?: BucketAccessLogConfig;
    accessRules?: AccessRules;
    arn?: string;
    bundleId?: string;
    createdAt?: Date;
    location?: ResourceLocation;
    name?: string;
    objectVersioning?: string;
    readonlyAccessAccounts?: string[];
    resourceType?: string;
    resourcesReceivingAccess?: ResourceReceivingAccess[];
    state?: BucketState;
    supportCode?: string;
    tags?: Tag[];
    url?: string;
}
