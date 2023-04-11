import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A current status of a contact list, available values: ACTIVE - contact list is ready, VALIDATING - contact list validation is in progress, IMPORTING - importing is in progress, IMPORT_FAILED - in case of errors occurred during the importing, ERRORS - contact list has validation errors, DELETED - contact list was deleted, PARSE_FAILED - contacts cannot be parsed, COLUMN_TOO_LARGE - if size of phone number or any other column exceeds 255 characters
 */
export declare enum ContactListStatusEnum {
    Active = "ACTIVE",
    Validating = "VALIDATING",
    Importing = "IMPORTING",
    ImportFailed = "IMPORT_FAILED",
    Errors = "ERRORS",
    Deleted = "DELETED",
    ParseFailed = "PARSE_FAILED",
    ColumnTooLarge = "COLUMN_TOO_LARGE"
}
/**
 * Represents a contact list in CallFire system
 */
export declare class ContactList extends SpeakeasyBase {
    /**
     * A time when a given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    created?: number;
    /**
     * An Id of a contact list
     */
    id?: number;
    /**
     * A name of a contact list
     */
    name?: string;
    /**
     * A number of contacts in a contact list
     */
    size?: number;
    /**
     * A current status of a contact list, available values: ACTIVE - contact list is ready, VALIDATING - contact list validation is in progress, IMPORTING - importing is in progress, IMPORT_FAILED - in case of errors occurred during the importing, ERRORS - contact list has validation errors, DELETED - contact list was deleted, PARSE_FAILED - contacts cannot be parsed, COLUMN_TOO_LARGE - if size of phone number or any other column exceeds 255 characters
     */
    status?: ContactListStatusEnum;
}
