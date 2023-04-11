import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLabelGroupXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceDescribeLabelGroup = "AWSLookoutEquipmentFrontendService.DescribeLabelGroup"
}
export declare class DescribeLabelGroupRequest extends SpeakeasyBase {
    describeLabelGroupRequest: shared.DescribeLabelGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLabelGroupXAmzTargetEnum;
}
export declare class DescribeLabelGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeLabelGroupResponse?: shared.DescribeLabelGroupResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
