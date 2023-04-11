import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBGPPeerXAmzTargetEnum {
    OvertureServiceCreateBGPPeer = "OvertureService.CreateBGPPeer"
}
export declare class CreateBGPPeerRequest extends SpeakeasyBase {
    createBGPPeerRequest: shared.CreateBGPPeerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBGPPeerXAmzTargetEnum;
}
export declare class CreateBGPPeerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createBGPPeerResponse?: shared.CreateBGPPeerResponse;
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
