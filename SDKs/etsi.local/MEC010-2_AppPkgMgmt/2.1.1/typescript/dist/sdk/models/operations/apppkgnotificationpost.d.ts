import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppPkgNotificationPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized :  used when the client did not submit credentials.
     */
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
