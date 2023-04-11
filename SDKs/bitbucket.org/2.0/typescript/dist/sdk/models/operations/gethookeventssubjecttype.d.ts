import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHookEventsSubjectTypeSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 * A resource or subject type.
 */
export declare enum GetHookEventsSubjectTypeSubjectTypeEnum {
    Repository = "repository",
    Workspace = "workspace"
}
export declare class GetHookEventsSubjectTypeRequest extends SpeakeasyBase {
    /**
     * A resource or subject type.
     */
    subjectType: GetHookEventsSubjectTypeSubjectTypeEnum;
}
export declare class GetHookEventsSubjectTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If an invalid `{subject_type}` value was specified.
     */
    error?: Record<string, any>;
    /**
     * A paginated list of webhook types available to subscribe on.
     */
    paginatedHookEvents?: shared.PaginatedHookEvents;
}
