import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllApIsRequest extends SpeakeasyBase {
    /**
     * Only return APIs that have been created by the user ID represented by the given value.
     */
    createdBy?: string;
    /**
     * Only return APIs whose description includes the given value. Matching is case insensitive.
     */
    description?: string;
    /**
     * The sorting direction, which can be ascending or descending. The value can be asc to specify an ascending direction or desc to specify a descending direction. If none is specified, the default sorting direction is descending for timestamp and numeric fields and ascending otherwise. An ID is not considered a numeric field.
     */
    direction?: string;
    /**
     * Only return APIs with the corresponding privacy state. Public APIs have the isPublic value true; private APIs have the isPublic value false.
     */
    isPublic?: string;
    /**
     * Only return APIs whose name includes the given value. Matching is case insensitive.
     */
    name?: string;
    /**
     * Only return APIs that have been updated after this time. Time is represented using the ISO 8601 date and time format.
     */
    since?: string;
    /**
     * The value of sort can be one of the names of the fields included in the response.
     */
    sort?: string;
    /**
     * Only return APIs whose summary includes the given value. Matching is case insensitive.
     */
    summary?: string;
    /**
     * Only return APIs that have been updated before this time. Time is represented using the ISO 8601 date and time format.
     */
    until?: string;
    /**
     * Only return APIs that have been updated by the user ID represented by the given value.
     */
    updatedBy?: string;
    /**
     * Only return APIs that are inside the given workspace.
     */
    workspace?: string;
}
export declare class GetAllApIsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
