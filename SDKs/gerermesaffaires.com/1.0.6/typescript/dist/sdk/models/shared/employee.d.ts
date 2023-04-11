import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EmployeeLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * An employee folder
 */
export declare class Employee extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    comment?: string;
    contractType?: string;
    employeeNumber?: string;
    end?: string;
    function?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: EmployeeLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    postalMail?: boolean;
    ssNumber?: string;
    start?: string;
}
