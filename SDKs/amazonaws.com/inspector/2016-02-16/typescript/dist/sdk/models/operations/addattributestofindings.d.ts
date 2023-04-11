import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddAttributesToFindingsXAmzTargetEnum {
    InspectorServiceAddAttributesToFindings = "InspectorService.AddAttributesToFindings"
}
export declare class AddAttributesToFindingsRequest extends SpeakeasyBase {
    addAttributesToFindingsRequest: shared.AddAttributesToFindingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddAttributesToFindingsXAmzTargetEnum;
}
export declare class AddAttributesToFindingsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    addAttributesToFindingsResponse?: shared.AddAttributesToFindingsResponse;
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
     * ServiceTemporarilyUnavailableException
     */
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
