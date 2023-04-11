import { AuditLogs } from "./auditlogs";
import { CodeReferences } from "./codereferences";
import { Configs } from "./configs";
import { Environments } from "./environments";
import { FeatureFlagAndSettingValues } from "./featureflagandsettingvalues";
import { FeatureFlagAndSettingValuesUsingSDKKey } from "./featureflagandsettingvaluesusingsdkkey";
import { FeatureFlagsAndSettings } from "./featureflagsandsettings";
import { IntegrationLinks } from "./integrationlinks";
import { Me } from "./me";
import { Members } from "./members";
import * as shared from "./models/shared";
import { Organizations } from "./organizations";
import { PermissionGroups } from "./permissiongroups";
import { Products } from "./products";
import { SDKKeys } from "./sdkkeys";
import { Segments } from "./segments";
import { Tags } from "./tags";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.configcat.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * **Base API URL**: https://api.configcat.com
 *
 * @remarks
 *
 * If you prefer the swagger documentation, you can find it here: [Swagger UI](https://api.configcat.com/swagger).
 *
 * The purpose of this API is to access the ConfigCat platform programmatically.
 * You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat.
 *
 * The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON
 * and JSON+HAL format. Do not use this API for accessing and evaluating feature flag values. Use the [SDKs instead](https://configcat.com/docs/sdk-reference/overview).
 *
 *
 * # OpenAPI Specification
 *
 * The complete specification is publicly available here: [swagger.json](v1/swagger.json).
 * You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or
 * [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.
 *
 * # Authentication
 * This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication).
 *
 * <!-- ReDoc-Inject: <security-definitions> -->
 *
 * # Throttling and rate limits
 * All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:
 *
 * | Header | Description |
 * | :- | :- |
 * | X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. |
 * | X-Rate-Limit-Reset     | The time	when the current rate limit period resets.						  |
 *
 * When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header.
 *
 */
export declare class SDK {
    /**
     * Access audit log entries.
     */
    auditLogs: AuditLogs;
    /**
     * With this endpoint you can upload Feature Flag and Setting usage references that will be shown on the ConfigCat Dashboard.
     *
     * @remarks
     *
     * <a href="https://configcat.com/docs/advanced/code-references/overview/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Code References.
     */
    codeReferences: CodeReferences;
    /**
     * With these endpoints you can manage your Configs.
     *
     * @remarks
     * This also can be used to manage [Feature Flags and Settings](#tag/Feature-Flags-and-Settings) and their
     * [served values](#tag/Feature-Flag-and-Setting-values) through this API.
     *
     * <a href="https://configcat.com/docs/main-concepts/#config" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Configs.
     */
    configs: Configs;
    /**
     * With these endpoints you can update existing Environments or add new ones into your selected [Product](#tag/Products).
     *
     * @remarks
     *
     * <a href="https://configcat.com/docs/main-concepts/#environment" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Environments.
     */
    environments: Environments;
    /**
     * With these endpoints you can control how your existing Feature Flags and Settings should serve their values.
     *
     * @remarks
     * You can turn Feature Flags on or off, update Setting values and also add, remove or reorder Percentage and Targeting Rules.
     *
     * To determine which Feature Flag or Setting you want to work with you have to pass its `settingId`. It can be
     * obtained from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.
     *
     * You also have to specify in which Environment you want to change the served value configuration by its
     * `environmentId` which can be obtained from the [List Environments](#operation/get-environments) endpoint.
     */
    featureFlagAndSettingValues: FeatureFlagAndSettingValues;
    /**
     * With these endpoints you can control how your existing Feature Flags and Settings should serve their values.
     *
     * @remarks
     * You can turn Feature Flags on or off, update Setting values and also add, remove or change the order of Percentage and Targeting Rules.
     *
     * These endpoints are determining the Environment and Config by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in
     * the `X-CONFIGCAT-SDKKEY` request header. To identify the desired Feature Flag or Setting to change,
     * you can use either its `settingId` or `key` attribute. You can get those attributes
     * from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.
     */
    featureFlagAndSettingValuesUsingSDKKey: FeatureFlagAndSettingValuesUsingSDKKey;
    /**
     * With these endpoints you can manage your Feature Flags or Settings within a Config.
     *
     * @remarks
     * However you can't use them for manipulating the values of your Feature Flags and Settings,
     * to do that please visit the [Feature Flag & Setting values using SDK Key](#tag/Feature-Flag-and-Setting-values-using-SDK-Key)
     * and [Feature Flag & Setting values](#tag/Feature-Flag-and-Setting-values) sections of the API.
     *
     * For using these endpoints, first you have to select which Config you want to work with by its `configId`
     * which can be obtained from the [List Configs](#operation/get-configs) endpoint.
     * Then you can use it to create new Feature Flags or to get information about existing ones.
     *
     * Then you can obtain the `settingId` or `key` of your desired Feature Flag or Setting
     * to use them for further operations in this API.
     *
     * <a href="https://configcat.com/docs/main-concepts/#setting" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Settings.
     */
    featureFlagsAndSettings: FeatureFlagsAndSettings;
    integrationLinks: IntegrationLinks;
    /**
     * Information about the current user.
     */
    me: Me;
    /**
     * With these endpoints you can manage your Members.
     *
     * @remarks
     *
     * <a href="https://configcat.com/docs/advanced/team-collaboration" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Team Collaboration.
     */
    members: Members;
    /**
     * With these endpoints you can get useful information about your Organizations.
     *
     * @remarks
     * This also can be used to manage your [Products](#tag/Products).
     *
     * <a href="https://configcat.com/docs/organization/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the Organizations.
     */
    organizations: Organizations;
    /**
     * With these endpoints you can manage your Permission Groups.
     *
     * @remarks
     *
     * <a href="https://configcat.com/docs/advanced/team-collaboration#permissions--groups" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Permissions.
     */
    permissionGroups: PermissionGroups;
    /**
     * With these endpoints you can manage your Products.
     *
     * @remarks
     * This also can be used to manage [Environments](#tag/Environments), [Configs](#tag/Configs), [Tags](#tag/Tags) and [Permission Groups](#tag/Permission-Groups) through this API.
     *
     * <a href="https://configcat.com/docs/main-concepts/#product" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Products.
     */
    products: Products;
    /**
     * With these endpoints you can manage your SDK Keys.
     */
    sdkKeys: SDKKeys;
    /**
     * With these endpoints you can manage your Segments.
     *
     * @remarks
     * Segments allow you to group your users based on any of their properties. Define user segments and add them to multiple feature flags.
     */
    segments: Segments;
    /**
     * With these endpoints you can manage Tags. Tags are stored under a Product. You can  and add a Tag to a Feature Flag or Setting using the [Update Flag](#operation/update-setting) endpoint.
     */
    tags: Tags;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
