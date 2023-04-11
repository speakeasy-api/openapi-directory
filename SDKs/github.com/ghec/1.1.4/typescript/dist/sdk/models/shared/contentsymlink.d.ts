import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentSymlinkLinks extends SpeakeasyBase {
    git: string;
    html: string;
    self: string;
}
export declare enum ContentSymlinkTypeEnum {
    Symlink = "symlink"
}
/**
 * An object describing a symlink
 */
export declare class ContentSymlink extends SpeakeasyBase {
    links: ContentSymlinkLinks;
    downloadUrl: string;
    gitUrl: string;
    htmlUrl: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    target: string;
    type: ContentSymlinkTypeEnum;
    url: string;
}
