import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter Audit logs by Audit log type.
 */
export declare enum GetAuditlogsAuditLogTypeEnum {
    ProductCreated = "productCreated",
    ProductChanged = "productChanged",
    ProductOwnershipTransferred = "productOwnershipTransferred",
    ProductDeleted = "productDeleted",
    ProductsReordered = "productsReordered",
    TeamMemberInvited = "teamMemberInvited",
    TeamMemberInvitationRevoked = "teamMemberInvitationRevoked",
    TeamMemberJoined = "teamMemberJoined",
    TeamMemberPermissionGroupChanged = "teamMemberPermissionGroupChanged",
    TeamMemberRemoved = "teamMemberRemoved",
    TeamMemberLeft = "teamMemberLeft",
    TeamMemberInvitationChanged = "teamMemberInvitationChanged",
    TeamMemberInvitationResent = "teamMemberInvitationResent",
    TeamMemberInvitationRejected = "teamMemberInvitationRejected",
    ConfigCreated = "configCreated",
    ConfigChanged = "configChanged",
    ConfigDeleted = "configDeleted",
    ConfigsReordered = "configsReordered",
    EnvironmentCreated = "environmentCreated",
    EnvironmentChanged = "environmentChanged",
    EnvironmentDeleted = "environmentDeleted",
    EnvironmentsReordered = "environmentsReordered",
    SettingCreated = "settingCreated",
    SettingChanged = "settingChanged",
    SettingDeleted = "settingDeleted",
    SettingsReordered = "settingsReordered",
    SettingValueChanged = "settingValueChanged",
    WebHookCreated = "webHookCreated",
    WebHookChanged = "webHookChanged",
    WebHookDeleted = "webHookDeleted",
    SubscriptionChanged = "subscriptionChanged",
    PermissionGroupCreated = "permissionGroupCreated",
    PermissionGroupChanged = "permissionGroupChanged",
    PermissionGroupDeleted = "permissionGroupDeleted",
    PermissionGroupDefault = "permissionGroupDefault",
    ApiKeyAdded = "apiKeyAdded",
    ApiKeyRemoved = "apiKeyRemoved",
    IntegrationAdded = "integrationAdded",
    IntegrationChanged = "integrationChanged",
    IntegrationRemoved = "integrationRemoved",
    ApiKeyConnected = "apiKeyConnected",
    IntegrationLinkAdded = "integrationLinkAdded",
    IntegrationLinkRemoved = "integrationLinkRemoved",
    OrganizationAdded = "organizationAdded",
    OrganizationRemoved = "organizationRemoved",
    OrganizationChanged = "organizationChanged",
    OrganizationSubscriptionTypeChanged = "organizationSubscriptionTypeChanged",
    OrganizationAdminChanged = "organizationAdminChanged",
    OrganizationAdminLeft = "organizationAdminLeft",
    OrganizationAdminDisabled2FA = "organizationAdminDisabled2FA",
    TagAdded = "tagAdded",
    TagChanged = "tagChanged",
    TagRemoved = "tagRemoved",
    SettingTagAdded = "settingTagAdded",
    SettingTagRemoved = "settingTagRemoved",
    PublicApiAccessTokenAdded = "publicApiAccessTokenAdded",
    PublicApiAccessTokenRemoved = "publicApiAccessTokenRemoved",
    DomainAdded = "domainAdded",
    DomainVerified = "domainVerified",
    DomainRemoved = "domainRemoved",
    DomainSamlConfigured = "domainSamlConfigured",
    DomainSamlDeleted = "domainSamlDeleted",
    AutoProvisioningConfigurationChanged = "autoProvisioningConfigurationChanged",
    OrganizationMemberJoined = "organizationMemberJoined",
    OrganizationMemberProductJoinRequested = "organizationMemberProductJoinRequested",
    OrganizationMemberProductJoinRequestRejected = "organizationMemberProductJoinRequestRejected",
    OrganizationMemberProductJoinRequestApproved = "organizationMemberProductJoinRequestApproved",
    CodeReferencesUploaded = "codeReferencesUploaded",
    CodeReferenceDeleted = "codeReferenceDeleted",
    CodeReferenceStaleBranchDeleted = "codeReferenceStaleBranchDeleted",
    SegmentCreated = "segmentCreated",
    SegmentChanged = "segmentChanged",
    SegmentDeleted = "segmentDeleted",
    WebhookSigningKeyDeleted = "webhookSigningKeyDeleted",
    WebhookSigningKeyCreated = "webhookSigningKeyCreated"
}
export declare class GetAuditlogsRequest extends SpeakeasyBase {
    /**
     * Filter Audit logs by Audit log type.
     */
    auditLogType?: GetAuditlogsAuditLogTypeEnum;
    /**
     * The identifier of the Config.
     */
    configId?: string;
    /**
     * The identifier of the Environment.
     */
    environmentId?: string;
    /**
     * Filter Audit logs by starting UTC date.
     */
    fromUtcDateTime?: Date;
    /**
     * The identifier of the Product.
     */
    productId: string;
    /**
     * Filter Audit logs by ending UTC date.
     */
    toUtcDateTime?: Date;
}
export declare class GetAuditlogsResponse extends SpeakeasyBase {
    auditLogItemModels?: shared.AuditLogItemModel[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
