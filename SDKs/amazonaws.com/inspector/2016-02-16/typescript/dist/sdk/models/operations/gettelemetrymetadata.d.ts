import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTelemetryMetadataXAmzTargetEnum {
    InspectorServiceGetTelemetryMetadata = "InspectorService.GetTelemetryMetadata"
}
export declare class GetTelemetryMetadataRequest extends SpeakeasyBase {
    getTelemetryMetadataRequest: shared.GetTelemetryMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTelemetryMetadataXAmzTargetEnum;
}
export declare class GetTelemetryMetadataResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getTelemetryMetadataResponse?: shared.GetTelemetryMetadataResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
