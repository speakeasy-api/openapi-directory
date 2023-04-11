import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The story to create.
 */
export declare class CreateStoryForTaskRequestBodyInput extends SpeakeasyBase {
    data?: shared.StoryRequestInput;
}
export declare class CreateStoryForTaskRequest extends SpeakeasyBase {
    /**
     * The story to create.
     */
    requestBody: CreateStoryForTaskRequestBodyInput;
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
 * Successfully created a new story.
 */
export declare class CreateStoryForTask201ApplicationJSON extends SpeakeasyBase {
    data?: shared.StoryResponse;
}
export declare class CreateStoryForTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully created a new story.
     */
    createStoryForTask201ApplicationJSONObject?: CreateStoryForTask201ApplicationJSON;
}
