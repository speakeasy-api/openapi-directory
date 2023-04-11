import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AllocatePublicVirtualInterfaceXAmzTargetEnum {
    OvertureServiceAllocatePublicVirtualInterface = "OvertureService.AllocatePublicVirtualInterface"
}
export declare class AllocatePublicVirtualInterfaceRequest extends SpeakeasyBase {
    allocatePublicVirtualInterfaceRequest: shared.AllocatePublicVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocatePublicVirtualInterfaceXAmzTargetEnum;
}
export declare class AllocatePublicVirtualInterfaceResponse extends SpeakeasyBase {
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
