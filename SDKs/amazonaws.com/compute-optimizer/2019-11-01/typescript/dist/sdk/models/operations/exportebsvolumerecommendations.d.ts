import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExportEBSVolumeRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceExportEBSVolumeRecommendations = "ComputeOptimizerService.ExportEBSVolumeRecommendations"
}
export declare class ExportEBSVolumeRecommendationsRequest extends SpeakeasyBase {
    exportEBSVolumeRecommendationsRequest: shared.ExportEBSVolumeRecommendationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportEBSVolumeRecommendationsXAmzTargetEnum;
}
export declare class ExportEBSVolumeRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    exportEBSVolumeRecommendationsResponse?: shared.ExportEBSVolumeRecommendationsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * MissingAuthenticationToken
     */
    missingAuthenticationToken?: any;
    /**
     * OptInRequiredException
     */
    optInRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
