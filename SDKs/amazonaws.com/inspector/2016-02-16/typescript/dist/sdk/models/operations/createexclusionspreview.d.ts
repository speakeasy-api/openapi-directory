import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateExclusionsPreviewXAmzTargetEnum {
    InspectorServiceCreateExclusionsPreview = "InspectorService.CreateExclusionsPreview"
}
export declare class CreateExclusionsPreviewRequest extends SpeakeasyBase {
    createExclusionsPreviewRequest: shared.CreateExclusionsPreviewRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateExclusionsPreviewXAmzTargetEnum;
}
export declare class CreateExclusionsPreviewResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createExclusionsPreviewResponse?: shared.CreateExclusionsPreviewResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NoSuchEntityException
     */
    noSuchEntityException?: any;
    /**
     * PreviewGenerationInProgressException
     */
    previewGenerationInProgressException?: any;
    /**
     * ServiceTemporarilyUnavailableException
     */
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
