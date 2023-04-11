import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRepositoryHostedPropertyValueRequest extends SpeakeasyBase {
    /**
     * The key of the Connect app.
     */
    appKey: string;
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
export declare class DeleteRepositoryHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
