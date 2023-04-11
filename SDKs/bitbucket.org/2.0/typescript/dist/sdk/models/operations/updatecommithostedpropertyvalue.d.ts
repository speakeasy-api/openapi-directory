import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateCommitHostedPropertyValueRequest extends SpeakeasyBase {
    /**
     * The application property to create or update.
     */
    requestBody: Record<string, any>;
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
export declare class UpdateCommitHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
