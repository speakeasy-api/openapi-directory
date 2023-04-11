import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The tag to add to the task.
 */
export declare class AddTagForTaskRequestBody extends SpeakeasyBase {
    data?: shared.TaskAddTagRequest;
}
export declare class AddTagForTaskRequest extends SpeakeasyBase {
    /**
     * The tag to add to the task.
     */
    requestBody: AddTagForTaskRequestBody;
    /**
     * Defines fields to return.
     *
     * @remarks
     * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
     * The id of included objects will always be returned, regardless of the field options.
     */
    optFields?: string[];
    /**
     * Provides “pretty” output.
     *
     * @remarks
     * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     */
    optPretty?: boolean;
    /**
     * The task to operate on.
     */
    taskGid: string;
}
/**
 * Successfully added the specified tag to the task.
 */
export declare class AddTagForTask200ApplicationJSON extends SpeakeasyBase {
    /**
     * An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.
     */
    data?: Record<string, any>;
}
export declare class AddTagForTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully added the specified tag to the task.
     */
    addTagForTask200ApplicationJSONObject?: AddTagForTask200ApplicationJSON;
}
