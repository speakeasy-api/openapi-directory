import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetComplianceDetailXAmzTargetEnum {
    AWSFMS20180101GetComplianceDetail = "AWSFMS_20180101.GetComplianceDetail"
}
export declare class GetComplianceDetailRequest extends SpeakeasyBase {
    getComplianceDetailRequest: shared.GetComplianceDetailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceDetailXAmzTargetEnum;
}
export declare class GetComplianceDetailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getComplianceDetailResponse?: shared.GetComplianceDetailResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
