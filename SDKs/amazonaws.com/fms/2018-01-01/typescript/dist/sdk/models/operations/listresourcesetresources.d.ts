import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourceSetResourcesXAmzTargetEnum {
    AWSFMS20180101ListResourceSetResources = "AWSFMS_20180101.ListResourceSetResources"
}
export declare class ListResourceSetResourcesRequest extends SpeakeasyBase {
    listResourceSetResourcesRequest: shared.ListResourceSetResourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceSetResourcesXAmzTargetEnum;
}
export declare class ListResourceSetResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * Success
     */
    listResourceSetResourcesResponse?: shared.ListResourceSetResourcesResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
