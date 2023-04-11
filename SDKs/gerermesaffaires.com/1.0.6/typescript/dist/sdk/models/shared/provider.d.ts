import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProviderLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * A provider folder
 */
export declare class Provider extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    comment?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: ProviderLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    providerNumber?: string;
    start?: string;
}
