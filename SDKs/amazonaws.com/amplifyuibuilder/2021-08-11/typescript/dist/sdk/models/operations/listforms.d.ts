import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFormsRequest extends SpeakeasyBase {
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
     * The name of the backend environment that is a part of the Amplify app.
     */
    environmentName: string;
    /**
     * The maximum number of forms to retrieve.
     */
    maxResults?: number;
    /**
     * The token to request the next page of results.
     */
    nextToken?: string;
}
export declare class ListFormsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listFormsResponse?: shared.ListFormsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
