import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCommitHostedPropertyValueRequest extends SpeakeasyBase {
    /**
     * The key of the Connect app.
     */
    appKey: string;
    /**
     * The commit.
     */
    commit: string;
    /**
     * The name of the property.
     */
    propertyName: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * The repository container; either the workspace slug or the UUID in curly braces.
     */
    workspace: string;
}
export declare class GetCommitHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The value of the property.
     */
    applicationProperty?: Record<string, any>;
}
