import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * The field on which to sort the Contacts
 */
export declare enum ContactsSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Name = "name",
    FirstName = "first_name",
    LastName = "last_name",
    Email = "email"
}
/**
 * Apply sorting
 */
export declare class ContactsSort extends SpeakeasyBase {
    /**
     * The field on which to sort the Contacts
     */
    by?: ContactsSortByEnum;
    /**
     * The direction in which to sort the results
     */
    direction?: SortDirectionEnum;
}
