import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchProjectsIdRequestBody extends SpeakeasyBase {
    /**
     * Global permissions.  Can be: `none`, `anyone_with_read`, `anyone_with_full`.
     */
    globalAccess: string;
}
export declare class PatchProjectsIdRequest extends SpeakeasyBase {
    requestBody: PatchProjectsIdRequestBody;
    /**
     * Project ID.
     */
    id: number;
}
export declare class PatchProjectsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Projects object.
     */
    projectEntity?: shared.ProjectEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
