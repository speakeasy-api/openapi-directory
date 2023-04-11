import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRegistryCatalogDataXAmzTargetEnum {
    SpencerFrontendServicePutRegistryCatalogData = "SpencerFrontendService.PutRegistryCatalogData"
}
export declare class PutRegistryCatalogDataRequest extends SpeakeasyBase {
    putRegistryCatalogDataRequest: shared.PutRegistryCatalogDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRegistryCatalogDataXAmzTargetEnum;
}
export declare class PutRegistryCatalogDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    putRegistryCatalogDataResponse?: shared.PutRegistryCatalogDataResponse;
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
