import { SpeakeasyBase } from "../../../internal/utils";
import { StudioEncryptionConfiguration } from "./studioencryptionconfiguration";
import { StudioStateEnum } from "./studiostateenum";
import { StudioStatusCodeEnum } from "./studiostatuscodeenum";
/**
 * <p>Represents a studio resource.</p> <p>A studio is the core resource used with Nimble Studio. You must create a studio first, before any other resource type can be created. All other resources you create and manage in Nimble Studio are contained within a studio.</p> <p>When creating a studio, you must provides two IAM roles for use with the Nimble Studio portal. These roles are assumed by your users when they log in to the Nimble Studio portal via IAM Identity Center and your identity source.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>Your studio roles must trust the <code>identity.nimble.amazonaws.com</code> service principal to function properly.</p>
 */
export declare class Studio extends SpeakeasyBase {
    adminRoleArn?: string;
    arn?: string;
    createdAt?: Date;
    displayName?: string;
    homeRegion?: string;
    ssoClientId?: string;
    state?: StudioStateEnum;
    statusCode?: StudioStatusCodeEnum;
    statusMessage?: string;
    studioEncryptionConfiguration?: StudioEncryptionConfiguration;
    studioId?: string;
    studioName?: string;
    studioUrl?: string;
    tags?: Record<string, string>;
    updatedAt?: Date;
    userRoleArn?: string;
}
