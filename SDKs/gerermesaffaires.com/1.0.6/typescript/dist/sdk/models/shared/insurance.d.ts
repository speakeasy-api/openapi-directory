import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InsuranceLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * An insurance folder
 */
export declare class Insurance extends SpeakeasyBase {
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
    level?: InsuranceLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    policyNumber?: string;
    start?: string;
}
