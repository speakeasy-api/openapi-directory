import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContractualRelationshipLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * A contractual relationship folder
 */
export declare class ContractualRelationship extends SpeakeasyBase {
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
    level?: ContractualRelationshipLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    start?: string;
}
