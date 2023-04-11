import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetOrgSecretRequest extends SpeakeasyBase {
    org: string;
    /**
     * secret_name parameter
     */
    secretName: string;
}
export declare class ActionsGetOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    organizationActionsSecret?: shared.OrganizationActionsSecret;
}
