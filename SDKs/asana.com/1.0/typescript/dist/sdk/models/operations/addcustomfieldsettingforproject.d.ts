import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the custom field setting.
 */
export declare class AddCustomFieldSettingForProjectRequestBody extends SpeakeasyBase {
    data?: shared.AddCustomFieldSettingRequest;
}
export declare class AddCustomFieldSettingForProjectRequest extends SpeakeasyBase {
    /**
     * Information about the custom field setting.
     */
    requestBody: AddCustomFieldSettingForProjectRequestBody;
    /**
     * Provides “pretty” output.
     *
     * @remarks
     * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     */
    optPretty?: boolean;
    /**
     * Globally unique identifier for the project.
     */
    projectGid: string;
}
/**
 * Successfully added the custom field to the project.
 */
export declare class AddCustomFieldSettingForProject200ApplicationJSON extends SpeakeasyBase {
    data?: shared.CustomFieldSettingResponse;
}
export declare class AddCustomFieldSettingForProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully added the custom field to the project.
     */
    addCustomFieldSettingForProject200ApplicationJSONObject?: AddCustomFieldSettingForProject200ApplicationJSON;
}
