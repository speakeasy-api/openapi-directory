/**
 * The type of entity that performed the action on the affected resource. Possible values are:
 */
export declare enum UserIdentityTypeEnum {
    AssumedRole = "AssumedRole",
    IAMUser = "IAMUser",
    FederatedUser = "FederatedUser",
    Root = "Root",
    AWSAccount = "AWSAccount",
    AWSService = "AWSService"
}
