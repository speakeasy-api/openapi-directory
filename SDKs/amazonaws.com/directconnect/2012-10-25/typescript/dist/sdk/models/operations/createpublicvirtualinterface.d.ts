import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePublicVirtualInterfaceXAmzTargetEnum {
    OvertureServiceCreatePublicVirtualInterface = "OvertureService.CreatePublicVirtualInterface"
}
export declare class CreatePublicVirtualInterfaceRequest extends SpeakeasyBase {
    createPublicVirtualInterfaceRequest: shared.CreatePublicVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePublicVirtualInterfaceXAmzTargetEnum;
}
export declare class CreatePublicVirtualInterfaceResponse extends SpeakeasyBase {
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
