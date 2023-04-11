import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAvailableZonesXAmzTargetEnum {
    CloudHsmFrontendServiceListAvailableZones = "CloudHsmFrontendService.ListAvailableZones"
}
export declare class ListAvailableZonesRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAvailableZonesXAmzTargetEnum;
}
export declare class ListAvailableZonesResponse extends SpeakeasyBase {
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
    listAvailableZonesResponse?: shared.ListAvailableZonesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
