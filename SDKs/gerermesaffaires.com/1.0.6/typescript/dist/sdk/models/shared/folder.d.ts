import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FolderLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare class Folder extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: FolderLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
}
