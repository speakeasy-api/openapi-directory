import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentDirectoryLinks extends SpeakeasyBase {
    git: string;
    html: string;
    self: string;
}
export declare enum ContentDirectoryTypeEnum {
    Dir = "dir",
    File = "file",
    Submodule = "submodule",
    Symlink = "symlink"
}
export declare class ContentDirectory extends SpeakeasyBase {
    links: ContentDirectoryLinks;
    content?: string;
    downloadUrl: string;
    gitUrl: string;
    htmlUrl: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    type: ContentDirectoryTypeEnum;
    url: string;
}
