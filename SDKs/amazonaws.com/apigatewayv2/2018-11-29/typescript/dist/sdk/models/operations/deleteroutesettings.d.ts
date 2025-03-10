import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRouteSettingsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * The route key.
     */
    routeKey: string;
    /**
     * The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
     */
    stageName: string;
}
export declare class DeleteRouteSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
