import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRoleMappingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    /**
     * A successful response will return the list of role mappings.
     */
    roleMappings?: shared.RoleMapping[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
