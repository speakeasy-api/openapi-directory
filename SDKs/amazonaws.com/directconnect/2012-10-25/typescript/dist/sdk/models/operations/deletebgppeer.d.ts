import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBGPPeerXAmzTargetEnum {
    OvertureServiceDeleteBGPPeer = "OvertureService.DeleteBGPPeer"
}
export declare class DeleteBGPPeerRequest extends SpeakeasyBase {
    deleteBGPPeerRequest: shared.DeleteBGPPeerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBGPPeerXAmzTargetEnum;
}
export declare class DeleteBGPPeerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteBGPPeerResponse?: shared.DeleteBGPPeerResponse;
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
