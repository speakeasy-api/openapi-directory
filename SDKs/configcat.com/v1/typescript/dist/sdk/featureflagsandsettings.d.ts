import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FeatureFlagsAndSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createSetting - Create Flag
     *
     * This endpoint creates a new Feature Flag or Setting in a specified Config
     * identified by the `configId` parameter.
     *
     * **Important:** The `key` attribute must be unique within the given Config.
    **/
    createSetting(req: operations.CreateSettingRequest, config?: AxiosRequestConfig): Promise<operations.CreateSettingResponse>;
    /**
     * deleteSetting - Delete Flag
     *
     * This endpoint removes a Feature Flag or Setting from a specified Config,
     * identified by the `configId` parameter.
    **/
    deleteSetting(req: operations.DeleteSettingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSettingResponse>;
    /**
     * getSetting - Get Flag
     *
     * This endpoint returns the metadata attributes of a Feature Flag or Setting
     * identified by the `settingId` parameter.
    **/
    getSetting(req: operations.GetSettingRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingResponse>;
    /**
     * getSettings - List Flags
     *
     * This endpoint returns the list of the Feature Flags and Settings defined in a
     * specified Config, identified by the `configId` parameter.
    **/
    getSettings(req: operations.GetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsResponse>;
    /**
     * updateSetting - Update Flag
     *
     * This endpoint updates the metadata of a Feature Flag or Setting
     * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
     *
     * Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
     * The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
     *
     * The advantage of using JSON Patch is that you can describe individual update operations on a resource
     * without touching attributes that you don't want to change.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"settingId": 5345,
     * 	"key": "myGrandFeature",
     * 	"name": "Tihs is a naem with soem typos.",
     * 	"hint": "This flag controls my grandioso feature.",
     * 	"settingType": "boolean",
     * 	"tags": [
     * 		{
     * 			"tagId": 0,
     * 			"name": "sample tag",
     * 			"color": "whale"
     * 		}
     * 	]
     * }
     * ```
     * If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
     * ```
     * [
     * 	{
     * 		"op": "replace",
     * 		"path": "/name",
     * 		"value": "This is the name without typos."
     * 	},
     * 	{
     * 		"op": "add",
     * 		"path": "/tags/-",
     * 		"value": 2
     * 	}
     * ]
     * ```
     * Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
     * So we get a response like this:
     * ```
     * {
     * 	"settingId": 5345,
     * 	"key": "myGrandFeature",
     * 	"name": "This is the name without typos.",
     * 	"hint": "This flag controls my grandioso feature.",
     * 	"settingType": "boolean",
     * 	"tags": [
     * 		{
     * 			"tagId": 0,
     * 			"name": "sample tag",
     * 			"color": "whale"
     * 		},
     * 		{
     * 			"tagId": 2,
     * 			"name": "another tag",
     * 			"color": "koala"
     * 		}
     * 	]
     * }
     * ```
    **/
    updateSetting(req: operations.UpdateSettingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingResponse>;
}
