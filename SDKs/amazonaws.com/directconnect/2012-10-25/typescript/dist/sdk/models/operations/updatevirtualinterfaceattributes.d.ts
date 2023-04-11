import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateVirtualInterfaceAttributesXAmzTargetEnum {
    OvertureServiceUpdateVirtualInterfaceAttributes = "OvertureService.UpdateVirtualInterfaceAttributes"
}
export declare class UpdateVirtualInterfaceAttributesRequest extends SpeakeasyBase {
    updateVirtualInterfaceAttributesRequest: shared.UpdateVirtualInterfaceAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVirtualInterfaceAttributesXAmzTargetEnum;
}
export declare class UpdateVirtualInterfaceAttributesResponse extends SpeakeasyBase {
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
