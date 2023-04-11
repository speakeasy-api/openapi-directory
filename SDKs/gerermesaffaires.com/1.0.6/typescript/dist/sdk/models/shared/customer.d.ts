import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomerLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare class Customer extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    comment?: string;
    customerNumber?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: CustomerLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    start?: string;
}
