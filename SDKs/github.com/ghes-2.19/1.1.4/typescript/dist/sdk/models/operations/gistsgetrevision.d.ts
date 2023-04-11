import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsGetRevisionRequest extends SpeakeasyBase {
    /**
     * gist_id parameter
     */
    gistId: string;
    sha: string;
}
export declare class GistsGetRevisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    gistSimple?: shared.GistSimple;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
