import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Stores the metadata information about a feature on a form or view.
 */
export declare class PutMetadataFlagRequestBodyBody extends SpeakeasyBase {
    newValue?: string;
}
export declare class PutMetadataFlagRequestBody extends SpeakeasyBase {
    /**
     * Stores the metadata information about a feature on a form or view.
     */
    body: PutMetadataFlagRequestBodyBody;
}
export declare class PutMetadataFlagRequest extends SpeakeasyBase {
    requestBody: PutMetadataFlagRequestBody;
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
     * The name of the backend environment that is part of the Amplify app.
     */
    environmentName: string;
    /**
     * The name of the feature associated with the metadata.
     */
    featureName: string;
}
export declare class PutMetadataFlagResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
