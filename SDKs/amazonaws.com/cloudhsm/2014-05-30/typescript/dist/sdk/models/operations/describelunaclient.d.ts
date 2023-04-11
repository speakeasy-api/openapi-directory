import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLunaClientXAmzTargetEnum {
    CloudHsmFrontendServiceDescribeLunaClient = "CloudHsmFrontendService.DescribeLunaClient"
}
export declare class DescribeLunaClientRequest extends SpeakeasyBase {
    describeLunaClientRequest: shared.DescribeLunaClientRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLunaClientXAmzTargetEnum;
}
export declare class DescribeLunaClientResponse extends SpeakeasyBase {
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
    describeLunaClientResponse?: shared.DescribeLunaClientResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
