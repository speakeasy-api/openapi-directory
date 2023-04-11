import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Represents all of the information that is required to create a theme.
 */
export declare class CreateThemeRequestBodyThemeToCreate extends SpeakeasyBase {
    name?: string;
    overrides?: shared.ThemeValues[];
    tags?: Record<string, string>;
    values?: shared.ThemeValues[];
}
export declare class CreateThemeRequestBody extends SpeakeasyBase {
    /**
     * Represents all of the information that is required to create a theme.
     */
    themeToCreate: CreateThemeRequestBodyThemeToCreate;
}
export declare class CreateThemeRequest extends SpeakeasyBase {
    requestBody: CreateThemeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID of the Amplify app associated with the theme.
     */
    appId: string;
    /**
     * The unique client token.
     */
    clientToken?: string;
    /**
     * The name of the backend environment that is a part of the Amplify app.
     */
    environmentName: string;
}
export declare class CreateThemeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createThemeResponse?: shared.CreateThemeResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
