import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExportEc2InstanceRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceExportEc2InstanceRecommendations = "ComputeOptimizerService.ExportEC2InstanceRecommendations"
}
export declare class ExportEc2InstanceRecommendationsRequest extends SpeakeasyBase {
    exportEc2InstanceRecommendationsRequest: shared.ExportEc2InstanceRecommendationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportEc2InstanceRecommendationsXAmzTargetEnum;
}
export declare class ExportEc2InstanceRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    exportEc2InstanceRecommendationsResponse?: shared.ExportEc2InstanceRecommendationsResponse;
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
