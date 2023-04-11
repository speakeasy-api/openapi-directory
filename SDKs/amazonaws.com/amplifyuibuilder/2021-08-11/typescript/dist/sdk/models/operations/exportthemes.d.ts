import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportThemesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID of the Amplify app to export the themes to.
     */
    appId: string;
    /**
     * The name of the backend environment that is part of the Amplify app.
     */
    environmentName: string;
    /**
     * The token to request the next page of results.
     */
    nextToken?: string;
}
export declare class ExportThemesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    exportThemesResponse?: shared.ExportThemesResponse;
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
}
