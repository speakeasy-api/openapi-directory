import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentSubmoduleLinks extends SpeakeasyBase {
    git: string;
    html: string;
    self: string;
}
export declare enum ContentSubmoduleTypeEnum {
    Submodule = "submodule"
}
/**
 * An object describing a submodule
 */
export declare class ContentSubmodule extends SpeakeasyBase {
    links: ContentSubmoduleLinks;
    downloadUrl: string;
    gitUrl: string;
    htmlUrl: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    submoduleGitUrl: string;
    type: ContentSubmoduleTypeEnum;
    url: string;
}
