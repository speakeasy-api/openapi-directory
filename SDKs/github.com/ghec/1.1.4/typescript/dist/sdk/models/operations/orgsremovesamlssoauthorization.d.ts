import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsRemoveSamlSsoAuthorizationRequest extends SpeakeasyBase {
    credentialId: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OrgsRemoveSamlSsoAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
