import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAgreementXAmzTargetEnum {
    TransferServiceDescribeAgreement = "TransferService.DescribeAgreement"
}
export declare class DescribeAgreementRequest extends SpeakeasyBase {
    describeAgreementRequest: shared.DescribeAgreementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAgreementXAmzTargetEnum;
}
export declare class DescribeAgreementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAgreementResponse?: shared.DescribeAgreementResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
