import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeHsmXAmzTargetEnum {
    CloudHsmFrontendServiceDescribeHsm = "CloudHsmFrontendService.DescribeHsm"
}
export declare class DescribeHsmRequest extends SpeakeasyBase {
    describeHsmRequest: shared.DescribeHsmRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHsmXAmzTargetEnum;
}
export declare class DescribeHsmResponse extends SpeakeasyBase {
    /**
     * CloudHsmInternalException
     */
    cloudHsmInternalException?: any;
    /**
     * CloudHsmServiceException
     */
    cloudHsmServiceException?: any;
    contentType: string;
    /**
     * Success
     */
    describeHsmResponse?: shared.DescribeHsmResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
