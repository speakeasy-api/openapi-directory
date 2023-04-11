import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains directory limit information for a Region.
 */
export declare class DirectoryLimits extends SpeakeasyBase {
    cloudOnlyDirectoriesCurrentCount?: number;
    cloudOnlyDirectoriesLimit?: number;
    cloudOnlyDirectoriesLimitReached?: boolean;
    cloudOnlyMicrosoftADCurrentCount?: number;
    cloudOnlyMicrosoftADLimit?: number;
    cloudOnlyMicrosoftADLimitReached?: boolean;
    connectedDirectoriesCurrentCount?: number;
    connectedDirectoriesLimit?: number;
    connectedDirectoriesLimitReached?: boolean;
}
