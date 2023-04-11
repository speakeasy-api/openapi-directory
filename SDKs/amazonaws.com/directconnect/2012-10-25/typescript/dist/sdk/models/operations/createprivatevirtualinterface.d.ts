import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePrivateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceCreatePrivateVirtualInterface = "OvertureService.CreatePrivateVirtualInterface"
}
export declare class CreatePrivateVirtualInterfaceRequest extends SpeakeasyBase {
    createPrivateVirtualInterfaceRequest: shared.CreatePrivateVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePrivateVirtualInterfaceXAmzTargetEnum;
}
export declare class CreatePrivateVirtualInterfaceResponse extends SpeakeasyBase {
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
