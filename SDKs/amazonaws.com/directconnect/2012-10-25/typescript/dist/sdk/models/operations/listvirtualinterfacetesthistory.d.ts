import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListVirtualInterfaceTestHistoryXAmzTargetEnum {
    OvertureServiceListVirtualInterfaceTestHistory = "OvertureService.ListVirtualInterfaceTestHistory"
}
export declare class ListVirtualInterfaceTestHistoryRequest extends SpeakeasyBase {
    listVirtualInterfaceTestHistoryRequest: shared.ListVirtualInterfaceTestHistoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListVirtualInterfaceTestHistoryXAmzTargetEnum;
}
export declare class ListVirtualInterfaceTestHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    /**
     * Success
     */
    listVirtualInterfaceTestHistoryResponse?: shared.ListVirtualInterfaceTestHistoryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
