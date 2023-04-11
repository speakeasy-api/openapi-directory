import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteRoleMappingRequest extends SpeakeasyBase {
    /**
     * Unique id of a principal (typically either a user or service account).
     */
    principalId: string;
}
export declare class DeleteRoleMappingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
