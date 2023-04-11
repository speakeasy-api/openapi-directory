import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object with information about the individual creating the tag.
 */
export declare class GitCreateTagRequestBodyTagger extends SpeakeasyBase {
    /**
     * When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    date?: Date;
    /**
     * The email of the author of the tag
     */
    email: string;
    /**
     * The name of the author of the tag
     */
    name: string;
}
/**
 * The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
 */
export declare enum GitCreateTagRequestBodyTypeEnum {
    Commit = "commit",
    Tree = "tree",
    Blob = "blob"
}
export declare class GitCreateTagRequestBody extends SpeakeasyBase {
    /**
     * The tag message.
     */
    message: string;
    /**
     * The SHA of the git object this is tagging.
     */
    object: string;
    /**
     * The tag's name. This is typically a version (e.g., "v0.0.1").
     */
    tag: string;
    /**
     * An object with information about the individual creating the tag.
     */
    tagger?: GitCreateTagRequestBodyTagger;
    /**
     * The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
     */
    type: GitCreateTagRequestBodyTypeEnum;
}
export declare class GitCreateTagRequest extends SpeakeasyBase {
    requestBody: GitCreateTagRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class GitCreateTagResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    gitTag?: shared.GitTag;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
