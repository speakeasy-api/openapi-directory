import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentFileLinks extends SpeakeasyBase {
    git: string;
    html: string;
    self: string;
}
export declare enum ContentFileTypeEnum {
    File = "file"
}
/**
 * Content File
 */
export declare class ContentFile extends SpeakeasyBase {
    links: ContentFileLinks;
    content: string;
    downloadUrl: string;
    encoding: string;
    gitUrl: string;
    htmlUrl: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    submoduleGitUrl?: string;
    target?: string;
    type: ContentFileTypeEnum;
    url: string;
}
