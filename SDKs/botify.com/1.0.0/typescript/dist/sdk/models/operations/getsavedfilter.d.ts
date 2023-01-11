import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSavedFilterPathParams extends SpeakeasyBase {
    identifier: string;
    projectSlug: string;
    username: string;
}
export declare class GetSavedFilterRequest extends SpeakeasyBase {
    pathParams: GetSavedFilterPathParams;
}
export declare class GetSavedFilterResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    projectSavedFilter?: shared.ProjectSavedFilter;
    statusCode: number;
}
