import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLtiCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not admin of an organization
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * The list of LTI Credentials
     */
    ltiCredentials?: shared.LtiCredentials[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
