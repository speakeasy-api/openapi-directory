import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceAssociateVirtualInterface = "OvertureService.AssociateVirtualInterface"
}
export declare class AssociateVirtualInterfaceRequest extends SpeakeasyBase {
    associateVirtualInterfaceRequest: shared.AssociateVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateVirtualInterfaceXAmzTargetEnum;
}
export declare class AssociateVirtualInterfaceResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    virtualInterface?: shared.VirtualInterface;
}
