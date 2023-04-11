import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Update the source for the repository. Must include the branch name and path.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody4Source2Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody4 extends SpeakeasyBase {
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced: boolean;
    /**
     * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
     */
    public?: boolean;
    /**
     * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
     */
    source?: any;
}
/**
 * Update the source for the repository. Must include the branch name and path.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody3Source2Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody3 extends SpeakeasyBase {
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced?: boolean;
    /**
     * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
     */
    public: boolean;
    /**
     * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
     */
    source?: any;
}
/**
 * Update the source for the repository. Must include the branch name and path.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody2Source2Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody2 extends SpeakeasyBase {
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced?: boolean;
    /**
     * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
     */
    public?: boolean;
    /**
     * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
     */
    source?: any;
}
/**
 * Update the source for the repository. Must include the branch name and path.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody1Source2Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody1 extends SpeakeasyBase {
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced?: boolean;
    /**
     * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
     */
    public?: boolean;
    /**
     * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
     */
    source: any;
}
export declare class ReposUpdateInformationAboutPagesSiteRequest extends SpeakeasyBase {
    requestBody: any;
    owner: string;
    repo: string;
}
export declare class ReposUpdateInformationAboutPagesSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
