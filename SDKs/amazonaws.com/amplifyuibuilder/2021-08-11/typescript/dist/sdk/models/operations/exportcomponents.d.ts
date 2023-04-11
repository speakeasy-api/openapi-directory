import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportComponentsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID of the Amplify app to export components to.
     */
    appId: string;
    /**
     * The name of the backend environment that is a part of the Amplify app.
     */
    environmentName: string;
    /**
     * The token to request the next page of results.
     */
    nextToken?: string;
}
export declare class ExportComponentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    exportComponentsResponse?: shared.ExportComponentsResponse;
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
