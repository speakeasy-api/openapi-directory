/**
 * The account status
 *
 * @remarks
 * * Active:  When the account is active
 * * SystemBlocked:  When all stores on the account are blocked by the system
 * * UserBlocked: When all stores on the account are blocked on GO not on the system
 * * NotActivated: When the email is not verified
 *
 */
export declare enum AccountStatusEnum {
    Active = "Active",
    SystemBlocked = "SystemBlocked",
    UserBlocked = "UserBlocked",
    NotActivated = "NotActivated"
}
