import { SpeakeasyBase } from "../../../internal/utils";
/**
 * signed in user
 */
export declare class User extends SpeakeasyBase {
    admin?: boolean;
    allEmails?: string[];
    analyticsId?: string;
    avatarUrl?: string;
    basicEmailPrefs?: string;
    bitbucket?: number;
    bitbucketAuthorized?: boolean;
    containers?: number;
    createdAt?: Date;
    daysLeftInTrial?: number;
    devAdmin?: boolean;
    enrolledBetas?: string[];
    githubId?: number;
    githubOauthScopes?: string[];
    gravatarId?: number;
    herokuApiKey?: string;
    inBetaProgram?: boolean;
    login?: string;
    name?: string;
    organizationPrefs?: Record<string, any>;
    parallelism?: number;
    plan?: string;
    projects?: Record<string, any>;
    pusherId?: string;
    selectedEmail?: string;
    signInCount?: number;
    trialEnd?: Date;
}
