import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteVirtualInterfaceXAmzTargetEnum {
    OvertureServiceDeleteVirtualInterface = "OvertureService.DeleteVirtualInterface"
}
export declare class DeleteVirtualInterfaceRequest extends SpeakeasyBase {
    deleteVirtualInterfaceRequest: shared.DeleteVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVirtualInterfaceXAmzTargetEnum;
}
export declare class DeleteVirtualInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteVirtualInterfaceResponse?: shared.DeleteVirtualInterfaceResponse;
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
