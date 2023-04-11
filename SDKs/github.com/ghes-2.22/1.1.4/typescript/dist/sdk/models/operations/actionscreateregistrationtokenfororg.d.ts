import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsCreateRegistrationTokenForOrgRequest extends SpeakeasyBase {
    org: string;
}
export declare class ActionsCreateRegistrationTokenForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authenticationToken?: shared.AuthenticationToken;
}
