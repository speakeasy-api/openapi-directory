import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class CreateUserProfileResult extends SpeakeasyBase {
    createdTimestamp?: Date;
    displayName?: string;
    emailAddress?: string;
    lastModifiedTimestamp?: Date;
    sshPublicKey?: string;
    userArn: string;
}
