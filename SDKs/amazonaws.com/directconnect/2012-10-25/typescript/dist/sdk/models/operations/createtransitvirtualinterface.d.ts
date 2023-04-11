import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTransitVirtualInterfaceXAmzTargetEnum {
    OvertureServiceCreateTransitVirtualInterface = "OvertureService.CreateTransitVirtualInterface"
}
export declare class CreateTransitVirtualInterfaceRequest extends SpeakeasyBase {
    createTransitVirtualInterfaceRequest: shared.CreateTransitVirtualInterfaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTransitVirtualInterfaceXAmzTargetEnum;
}
export declare class CreateTransitVirtualInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTransitVirtualInterfaceResult?: shared.CreateTransitVirtualInterfaceResult;
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
