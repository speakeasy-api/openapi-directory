import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTestGridSessionArtifactsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridSessionArtifacts = "DeviceFarm_20150623.ListTestGridSessionArtifacts"
}
export declare class ListTestGridSessionArtifactsRequest extends SpeakeasyBase {
    listTestGridSessionArtifactsRequest: shared.ListTestGridSessionArtifactsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTestGridSessionArtifactsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResult?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListTestGridSessionArtifactsResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * Success
     */
    listTestGridSessionArtifactsResult?: shared.ListTestGridSessionArtifactsResult;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
