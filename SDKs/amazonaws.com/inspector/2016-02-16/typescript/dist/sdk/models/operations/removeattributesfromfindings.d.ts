import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveAttributesFromFindingsXAmzTargetEnum {
    InspectorServiceRemoveAttributesFromFindings = "InspectorService.RemoveAttributesFromFindings"
}
export declare class RemoveAttributesFromFindingsRequest extends SpeakeasyBase {
    removeAttributesFromFindingsRequest: shared.RemoveAttributesFromFindingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveAttributesFromFindingsXAmzTargetEnum;
}
export declare class RemoveAttributesFromFindingsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
     * Success
     */
    removeAttributesFromFindingsResponse?: shared.RemoveAttributesFromFindingsResponse;
    /**
     * ServiceTemporarilyUnavailableException
     */
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
