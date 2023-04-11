import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeHapgXAmzTargetEnum {
    CloudHsmFrontendServiceDescribeHapg = "CloudHsmFrontendService.DescribeHapg"
}
export declare class DescribeHapgRequest extends SpeakeasyBase {
    describeHapgRequest: shared.DescribeHapgRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHapgXAmzTargetEnum;
}
export declare class DescribeHapgResponse extends SpeakeasyBase {
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
    describeHapgResponse?: shared.DescribeHapgResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
