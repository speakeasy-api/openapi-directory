import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEntitiesDetectionV2JobsXAmzTargetEnum {
    ComprehendMedical20181030ListEntitiesDetectionV2Jobs = "ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs"
}
export declare class ListEntitiesDetectionV2JobsRequest extends SpeakeasyBase {
    listEntitiesDetectionV2JobsRequest: shared.ListEntitiesDetectionV2JobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEntitiesDetectionV2JobsXAmzTargetEnum;
}
export declare class ListEntitiesDetectionV2JobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listEntitiesDetectionV2JobsResponse?: shared.ListEntitiesDetectionV2JobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
