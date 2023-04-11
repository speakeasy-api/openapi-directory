import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
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
export declare class FeatureFlagAndSettingValues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get value
     *
     * @remarks
     * This endpoint returns the value of a Feature Flag or Setting
     * in a specified Environment identified by the `environmentId` parameter.
     *
     * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
     * The `value` represents what the clients will get when the evaluation requests of our SDKs
     * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
     *
     * The `rolloutRules` and `percentageRules` attributes are representing the current
     * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
     * in an **ordered** collection, which means the order of the returned rules is matching to the
     * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
     */
    getSettingValue(req: operations.GetSettingValueRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingValueResponse>;
    /**
     * Get values
     *
     * @remarks
     * This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
     * in a specified Environment identified by the `environmentId` parameter.
     *
     * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
     * The `value` represents what the clients will get when the evaluation requests of our SDKs
     * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
     *
     * The `rolloutRules` and `percentageRules` attributes are representing the current
     * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
     * in an **ordered** collection, which means the order of the returned rules is matching to the
     * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
     */
    getSettingValues(req: operations.GetSettingValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingValuesResponse>;
    /**
     * Replace value
     *
     * @remarks
     * This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.
     *
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     *
     * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't
     * want to change in its original state. Not listing one means that it will reset.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send a replace request body as below:
     * ```
     * {
     * 	"value": true
     * }
     * ```
     * Then besides that the default value is set to `true`, all the Percentage Rules are deleted.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
     *
     * The `rolloutRules` property describes two types of rules:
     *
     * - **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
     * - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.
     */
    replaceSettingValue(req: operations.ReplaceSettingValueRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceSettingValueResponse>;
    /**
     * Update value
     *
     * @remarks
     * This endpoint updates the value of a Feature Flag or Setting
     * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.
     *
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     *
     * The advantage of using JSON Patch is that you can describe individual update operations on a resource
     * without touching attributes that you don't want to change. It supports collection reordering, so it also
     * can be used for reordering the targeting rules of a Feature Flag or Setting.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send an update request body as below:
     * ```
     * [
     * 	{
     * 		"op": "replace",
     * 		"path": "/value",
     * 		"value": true
     * 	}
     * ]
     * ```
     * Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
     *
     * The `rolloutRules` property describes two types of rules:
     *
     * - **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
     * - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.
     */
    updateSettingValue(req: operations.UpdateSettingValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingValueResponse>;
}
