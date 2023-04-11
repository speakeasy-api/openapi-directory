import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectsIdRequest extends SpeakeasyBase {
    /**
     * Project ID.
     */
    id: number;
}
export declare class GetProjectsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Projects object.
     */
    projectEntity?: shared.ProjectEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
