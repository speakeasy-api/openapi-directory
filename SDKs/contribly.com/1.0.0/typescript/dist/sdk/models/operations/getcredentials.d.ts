import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of credentials associated with this user.
     */
    credentials?: shared.Credential[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
