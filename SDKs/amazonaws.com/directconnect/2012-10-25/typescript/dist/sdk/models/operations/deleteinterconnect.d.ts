import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteInterconnectXAmzTargetEnum {
    OvertureServiceDeleteInterconnect = "OvertureService.DeleteInterconnect"
}
export declare class DeleteInterconnectRequest extends SpeakeasyBase {
    deleteInterconnectRequest: shared.DeleteInterconnectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInterconnectXAmzTargetEnum;
}
export declare class DeleteInterconnectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteInterconnectResponse?: shared.DeleteInterconnectResponse;
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
