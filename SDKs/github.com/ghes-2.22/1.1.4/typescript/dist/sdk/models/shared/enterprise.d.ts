import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An enterprise account
 */
export declare class Enterprise extends SpeakeasyBase {
    avatarUrl: string;
    createdAt: Date;
    /**
     * A short description of the enterprise.
     */
    description?: string;
    htmlUrl: string;
    /**
     * Unique identifier of the enterprise
     */
    id: number;
    /**
     * The name of the enterprise.
     */
    name: string;
    nodeId: string;
    /**
     * The slug url identifier for the enterprise.
     */
    slug: string;
    updatedAt: Date;
    /**
     * The enterprise's website URL.
     */
    websiteUrl?: string;
}
