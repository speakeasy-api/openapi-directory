import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ConfirmPrivateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceConfirmPrivateVirtualInterface = "OvertureService.ConfirmPrivateVirtualInterface"
}
export declare class ConfirmPrivateVirtualInterfaceRequest extends SpeakeasyBase {
    confirmPrivateVirtualInterfaceRequest: shared.ConfirmPrivateVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmPrivateVirtualInterfaceXAmzTargetEnum;
}
export declare class ConfirmPrivateVirtualInterfaceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    confirmPrivateVirtualInterfaceResponse?: shared.ConfirmPrivateVirtualInterfaceResponse;
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
