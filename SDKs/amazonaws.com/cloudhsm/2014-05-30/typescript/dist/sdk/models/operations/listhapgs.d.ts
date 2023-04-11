import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHapgsXAmzTargetEnum {
    CloudHsmFrontendServiceListHapgs = "CloudHsmFrontendService.ListHapgs"
}
export declare class ListHapgsRequest extends SpeakeasyBase {
    listHapgsRequest: shared.ListHapgsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHapgsXAmzTargetEnum;
}
export declare class ListHapgsResponse extends SpeakeasyBase {
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
    listHapgsResponse?: shared.ListHapgsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
