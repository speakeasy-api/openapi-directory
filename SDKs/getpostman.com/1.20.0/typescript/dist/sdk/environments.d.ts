import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Environments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * All Environments
     *
     * @remarks
     * The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..
     *
     * The response contains an array of environments' information containing the `name`, `id`, `owner` and `uid` of each environment.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     */
    allEnvironments(config?: AxiosRequestConfig): Promise<operations.AllEnvironmentsResponse>;
    /**
     * Create Environment
     *
     * @remarks
     * A sample body is added to the request that conforms to the following JSON schema:
     *
     * ```json
     * {
     *   "type": "object",
     *   "properties": {
     *     "environment": {
     *       "type": "object",
     *       "properties": {
     *         "name": {
     *               "type": "string",
     *               "maxLength": 254,
     *               "minLength": 1
     *             },
     *         "values": {
     *           "type": "array",
     *           "maxItems": 100,
     *           "additionalItems": false,
     *           "items": {
     *               "type": "object",
     *               "properties": {
     *                 "key": {
     *                   "type": "string",
     *                   "maxLength": 254
     *                   "minLength": 1
     *                 },
     *                 "value": { "type": "string" },
     *                 "enabled": { "type": "boolean" }
     *               },
     *               "required": ["key", "value"]
     *             }
     *         }
     *       },
     *       "required": ["name"]
     *     }
     *   },
     *   "required": ["environment"]
     * }
     * ```
     *
     * On successful creation of the environment, the API returns the environment name and `id`.
     *
     * You can also specify the context of a workspace to create an environment in directly by passing the `workspace` as a query param.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     */
    createEnvironment(req: operations.CreateEnvironmentRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * Delete Environment
     *
     * @remarks
     * This endpoint allows you to delete a single environment based on an environment's unique `uid`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     */
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * Single Environment
     *
     * @remarks
     * Access the contents of an environment that is accessible to you using its unique id (`uid`).
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     */
    singleEnvironment(req: operations.SingleEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.SingleEnvironmentResponse>;
    /**
     * Update Environment
     *
     * @remarks
     * This endpoint replaces an existing environment.
     *
     * A sample body is added to the request that conforms to the following JSON schema:
     *
     * ```json
     * {
     * 	"type": "object",
     * 	"properties": {
     * 		"environment": {
     * 			"type": "object",
     * 			"properties": {
     * 				"name": {
     * 					"type": "string",
     * 					"maxLength": 254,
     * 					"minLength": 1
     * 				},
     * 				"values": {
     * 					"type": "array",
     * 					"maxItems": 100,
     * 					"additionalItems": false,
     * 					"items": {
     * 						"type": "object",
     * 						"properties": {
     * 							"key": {
     * 								"type": "string",
     * 								"maxLength": 254,
     * 								"minLength": 1
     * 							},
     * 							"value": {
     * 								"type": "string",
     * 								"maxLength": 254,
     * 								"minLength": 1
     * 							},
     * 							"type": {
     * 								"type": "string"
     * 							},
     * 							"enabled": {
     * 								"type": "boolean"
     * 							}
     * 						},
     * 						"required": [
     * 							"key",
     * 							"value"
     * 						]
     * 					}
     * 				}
     * 			}
     * 		}
     * 	},
     * 	"required": [
     * 		"environment"
     * 	]
     * }
     * ```
     *
     * On successful updation of the environment, the API returns the environment name and `id`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     */
    updateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
}
