import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetThemeRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID of the Amplify app.
     */
    appId: string;
    /**
     * The name of the backend environment that is part of the Amplify app.
     */
    environmentName: string;
    /**
     * The unique ID for the theme.
     */
    id: string;
}
export declare class GetThemeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getThemeResponse?: shared.GetThemeResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
