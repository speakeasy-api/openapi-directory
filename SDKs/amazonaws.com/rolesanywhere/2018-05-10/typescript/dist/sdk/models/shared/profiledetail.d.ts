import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the profile after a read or write operation.
 */
export declare class ProfileDetail extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    durationSeconds?: number;
    enabled?: boolean;
    managedPolicyArns?: string[];
    name?: string;
    profileArn?: string;
    profileId?: string;
    requireInstanceProperties?: boolean;
    roleArns?: string[];
    sessionPolicy?: string;
    updatedAt?: Date;
}
