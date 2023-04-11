import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AllocateTransitVirtualInterfaceXAmzTargetEnum {
    OvertureServiceAllocateTransitVirtualInterface = "OvertureService.AllocateTransitVirtualInterface"
}
export declare class AllocateTransitVirtualInterfaceRequest extends SpeakeasyBase {
    allocateTransitVirtualInterfaceRequest: shared.AllocateTransitVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocateTransitVirtualInterfaceXAmzTargetEnum;
}
export declare class AllocateTransitVirtualInterfaceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    allocateTransitVirtualInterfaceResult?: shared.AllocateTransitVirtualInterfaceResult;
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
}
