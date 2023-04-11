import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRegistryCatalogDataXAmzTargetEnum {
    SpencerFrontendServiceGetRegistryCatalogData = "SpencerFrontendService.GetRegistryCatalogData"
}
export declare class GetRegistryCatalogDataRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegistryCatalogDataXAmzTargetEnum;
}
export declare class GetRegistryCatalogDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRegistryCatalogDataResponse?: shared.GetRegistryCatalogDataResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedCommandException
     */
    unsupportedCommandException?: any;
}
