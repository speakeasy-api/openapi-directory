import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RevokeLtiCredentialsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class RevokeLtiCredentialsRequest extends SpeakeasyBase {
    /**
     * Credentials unique identifier
     *
     * @remarks
     *
     */
    credentials: string;
}
export declare class RevokeLtiCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not admin of an organization
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
