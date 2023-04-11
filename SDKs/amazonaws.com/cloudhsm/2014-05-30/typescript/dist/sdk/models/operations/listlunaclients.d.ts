import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLunaClientsXAmzTargetEnum {
    CloudHsmFrontendServiceListLunaClients = "CloudHsmFrontendService.ListLunaClients"
}
export declare class ListLunaClientsRequest extends SpeakeasyBase {
    listLunaClientsRequest: shared.ListLunaClientsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLunaClientsXAmzTargetEnum;
}
export declare class ListLunaClientsResponse extends SpeakeasyBase {
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
    listLunaClientsResponse?: shared.ListLunaClientsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
