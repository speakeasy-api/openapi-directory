import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The object used to create GitHub Pages deployment
 */
export declare class ReposCreatePagesDeploymentRequestBody extends SpeakeasyBase {
    /**
     * The URL of an artifact that contains the .zip or .tar of static assets to deploy. The artifact belongs to the repository.
     */
    artifactUrl: string;
    /**
     * The target environment for this GitHub Pages deployment.
     */
    environment?: string;
    /**
     * The OIDC token issued by GitHub Actions certifying the origin of the deployment.
     */
    oidcToken: string;
    /**
     * A unique string that represents the version of the build for this deployment.
     */
    pagesBuildVersion: string;
}
export declare class ReposCreatePagesDeploymentRequest extends SpeakeasyBase {
    requestBody: ReposCreatePagesDeploymentRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposCreatePagesDeploymentResponse extends SpeakeasyBase {
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
    pageDeployment?: shared.PageDeployment;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
