import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Account description
 */
export declare class AccountUpdate extends SpeakeasyBase {
    /**
     * Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
     */
    groupId: number;
    /**
     * Is account active
     */
    isActive: boolean;
}
