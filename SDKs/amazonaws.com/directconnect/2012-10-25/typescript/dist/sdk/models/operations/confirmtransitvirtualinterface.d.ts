import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ConfirmTransitVirtualInterfaceXAmzTargetEnum {
    OvertureServiceConfirmTransitVirtualInterface = "OvertureService.ConfirmTransitVirtualInterface"
}
export declare class ConfirmTransitVirtualInterfaceRequest extends SpeakeasyBase {
    confirmTransitVirtualInterfaceRequest: shared.ConfirmTransitVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmTransitVirtualInterfaceXAmzTargetEnum;
}
export declare class ConfirmTransitVirtualInterfaceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    confirmTransitVirtualInterfaceResponse?: shared.ConfirmTransitVirtualInterfaceResponse;
    contentType: string;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
