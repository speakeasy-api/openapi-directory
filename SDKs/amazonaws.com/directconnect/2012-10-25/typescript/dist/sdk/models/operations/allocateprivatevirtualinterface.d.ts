import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AllocatePrivateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceAllocatePrivateVirtualInterface = "OvertureService.AllocatePrivateVirtualInterface"
}
export declare class AllocatePrivateVirtualInterfaceRequest extends SpeakeasyBase {
    allocatePrivateVirtualInterfaceRequest: shared.AllocatePrivateVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocatePrivateVirtualInterfaceXAmzTargetEnum;
}
export declare class AllocatePrivateVirtualInterfaceResponse extends SpeakeasyBase {
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
     * DuplicateTagKeysException
     */
    duplicateTagKeysException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
    /**
     * Success
     */
    virtualInterface?: shared.VirtualInterface;
}
