import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetInstancewideDestinationOauthParamsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Exception occurred; see message for details.
     */
    knownExceptionInfo?: shared.KnownExceptionInfo;
    /**
     * Object with given id was not found.
     */
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
