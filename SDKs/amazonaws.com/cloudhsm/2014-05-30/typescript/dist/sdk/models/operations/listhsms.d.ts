import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHsmsXAmzTargetEnum {
    CloudHsmFrontendServiceListHsms = "CloudHsmFrontendService.ListHsms"
}
export declare class ListHsmsRequest extends SpeakeasyBase {
    listHsmsRequest: shared.ListHsmsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHsmsXAmzTargetEnum;
}
export declare class ListHsmsResponse extends SpeakeasyBase {
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
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listHsmsResponse?: shared.ListHsmsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
