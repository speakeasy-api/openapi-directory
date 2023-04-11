import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContractLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare class Contract extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    comment?: string;
    end?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: ContractLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    start?: string;
}
