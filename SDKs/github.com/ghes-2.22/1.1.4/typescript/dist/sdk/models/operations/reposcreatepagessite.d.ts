import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`
 */
export declare enum ReposCreatePagesSiteRequestBodySourcePathEnum {
    Root = "/",
    RootDocs = "/docs"
}
/**
 * The source branch and directory used to publish your Pages site.
 */
export declare class ReposCreatePagesSiteRequestBodySource extends SpeakeasyBase {
    /**
     * The repository branch used to publish your site's source files.
     */
    branch: string;
    /**
     * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`
     */
    path?: ReposCreatePagesSiteRequestBodySourcePathEnum;
}
/**
 * The source branch and directory used to publish your Pages site.
 */
export declare class ReposCreatePagesSiteRequestBody extends SpeakeasyBase {
    /**
     * The source branch and directory used to publish your Pages site.
     */
    source: ReposCreatePagesSiteRequestBodySource;
}
export declare class ReposCreatePagesSiteRequest extends SpeakeasyBase {
    requestBody: ReposCreatePagesSiteRequestBody;
    owner: string;
    repo: string;
}
export declare class ReposCreatePagesSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Conflict
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    page?: shared.Page;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
