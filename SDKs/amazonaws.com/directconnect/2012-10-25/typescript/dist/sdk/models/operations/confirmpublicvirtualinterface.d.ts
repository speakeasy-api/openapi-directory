import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ConfirmPublicVirtualInterfaceXAmzTargetEnum {
    OvertureServiceConfirmPublicVirtualInterface = "OvertureService.ConfirmPublicVirtualInterface"
}
export declare class ConfirmPublicVirtualInterfaceRequest extends SpeakeasyBase {
    confirmPublicVirtualInterfaceRequest: shared.ConfirmPublicVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmPublicVirtualInterfaceXAmzTargetEnum;
}
export declare class ConfirmPublicVirtualInterfaceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    confirmPublicVirtualInterfaceResponse?: shared.ConfirmPublicVirtualInterfaceResponse;
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
