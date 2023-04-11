import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The repository branch used to publish your site's source files. Can be either `master` or `gh-pages`.
 */
export declare enum ReposCreatePagesSiteRequestBodySourceBranchEnum {
    Master = "master",
    GhPages = "gh-pages"
}
/**
 * The repository directory that includes the source files for the Pages site. When `branch` is `master`, you can change `path` to `/docs`. When `branch` is `gh-pages`, you are unable to specify a `path` other than `/`.
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
     * The repository branch used to publish your site's source files. Can be either `master` or `gh-pages`.
     */
    branch: ReposCreatePagesSiteRequestBodySourceBranchEnum;
    /**
     * The repository directory that includes the source files for the Pages site. When `branch` is `master`, you can change `path` to `/docs`. When `branch` is `gh-pages`, you are unable to specify a `path` other than `/`.
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
/**
 * Preview header missing
 */
export declare class ReposCreatePagesSite415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
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
     * Preview header missing
     */
    reposCreatePagesSite415ApplicationJSONObject?: ReposCreatePagesSite415ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
