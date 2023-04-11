import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Settings Changes
 */
export declare class SettingsChangeEntity extends SpeakeasyBase {
    /**
     * Markdown-formatted change messages.
     */
    changes?: string[];
    /**
     * The time this change was made
     */
    createdAt?: Date;
    /**
     * The user id responsible for this change
     */
    userId?: number;
    /**
     * true if this change was performed by Files.com support.
     */
    userIsFilesSupport?: boolean;
    /**
     * The username of the user responsible for this change
     */
    username?: string;
}
