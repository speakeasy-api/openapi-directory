import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTunnelsXAmzTargetEnum {
    IoTSecuredTunnelingListTunnels = "IoTSecuredTunneling.ListTunnels"
}
export declare class ListTunnelsRequest extends SpeakeasyBase {
    listTunnelsRequest: shared.ListTunnelsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTunnelsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListTunnelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTunnelsResponse?: shared.ListTunnelsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
