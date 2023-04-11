import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Saves the data binding information for a theme.
 */
export declare class UpdateThemeRequestBodyUpdatedTheme extends SpeakeasyBase {
    id?: string;
    name?: string;
    overrides?: shared.ThemeValues[];
    values?: shared.ThemeValues[];
}
export declare class UpdateThemeRequestBody extends SpeakeasyBase {
    /**
     * Saves the data binding information for a theme.
     */
    updatedTheme: UpdateThemeRequestBodyUpdatedTheme;
}
export declare class UpdateThemeRequest extends SpeakeasyBase {
    requestBody: UpdateThemeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID for the Amplify app.
     */
    appId: string;
    /**
     * The unique client token.
     */
    clientToken?: string;
    /**
     * The name of the backend environment that is part of the Amplify app.
     */
    environmentName: string;
    /**
     * The unique ID for the theme.
     */
    id: string;
}
export declare class UpdateThemeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * Success
     */
    updateThemeResponse?: shared.UpdateThemeResponse;
}
