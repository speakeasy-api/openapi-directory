import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateForkRequestBody extends SpeakeasyBase {
    /**
     * Optional parameter to specify the organization name if forking into an organization.
     */
    organization?: string;
}
export declare class ReposCreateForkRequest extends SpeakeasyBase {
    requestBody?: ReposCreateForkRequestBody;
    owner: string;
    repo: string;
}
export declare class ReposCreateForkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    fullRepository?: shared.FullRepository;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
