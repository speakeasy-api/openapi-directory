import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateForkRequestBody extends SpeakeasyBase {
    /**
     * When forking from an existing repository, fork with only the default branch.
     */
    defaultBranchOnly?: boolean;
    /**
     * When forking from an existing repository, a new name for the fork.
     */
    name?: string;
    /**
     * Optional parameter to specify the organization name if forking into an organization.
     */
    organization?: string;
}
export declare class ReposCreateForkRequest extends SpeakeasyBase {
    requestBody?: ReposCreateForkRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
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
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
