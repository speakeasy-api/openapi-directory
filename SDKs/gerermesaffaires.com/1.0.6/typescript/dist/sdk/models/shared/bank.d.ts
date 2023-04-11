import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BankLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * A bank folder
 */
export declare class Bank extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    comment?: string;
    contractReference?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: BankLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    start?: string;
}
