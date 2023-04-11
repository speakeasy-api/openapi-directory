import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteGroupByIdRequest extends SpeakeasyBase {
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    groupId: string;
}
export declare class DeleteGroupByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
