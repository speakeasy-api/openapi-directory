import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetViolationDetailsXAmzTargetEnum {
    AWSFMS20180101GetViolationDetails = "AWSFMS_20180101.GetViolationDetails"
}
export declare class GetViolationDetailsRequest extends SpeakeasyBase {
    getViolationDetailsRequest: shared.GetViolationDetailsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetViolationDetailsXAmzTargetEnum;
}
export declare class GetViolationDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getViolationDetailsResponse?: shared.GetViolationDetailsResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
