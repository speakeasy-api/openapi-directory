import { SpeakeasyBase } from "../../../internal/utils";
import { ReactionRollup } from "./reactionrollup";
import { ReleaseAsset } from "./releaseasset";
import { SimpleUser } from "./simpleuser";
/**
 * A release.
 */
export declare class Release extends SpeakeasyBase {
    assets: ReleaseAsset[];
    assetsUrl: string;
    /**
     * A GitHub user.
     */
    author: SimpleUser;
    body?: string;
    bodyHtml?: string;
    bodyText?: string;
    createdAt: Date;
    /**
     * The URL of the release discussion.
     */
    discussionUrl?: string;
    /**
     * true to create a draft (unpublished) release, false to create a published one.
     */
    draft: boolean;
    htmlUrl: string;
    id: number;
    mentionsCount?: number;
    name: string;
    nodeId: string;
    /**
     * Whether to identify the release as a prerelease or a full release.
     */
    prerelease: boolean;
    publishedAt: Date;
    reactions?: ReactionRollup;
    /**
     * The name of the tag.
     */
    tagName: string;
    tarballUrl: string;
    /**
     * Specifies the commitish value that determines where the Git tag is created from.
     */
    targetCommitish: string;
    uploadUrl: string;
    url: string;
    zipballUrl: string;
}
