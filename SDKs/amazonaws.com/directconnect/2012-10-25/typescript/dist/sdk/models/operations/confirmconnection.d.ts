import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ConfirmConnectionXAmzTargetEnum {
    OvertureServiceConfirmConnection = "OvertureService.ConfirmConnection"
}
export declare class ConfirmConnectionRequest extends SpeakeasyBase {
    confirmConnectionRequest: shared.ConfirmConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmConnectionXAmzTargetEnum;
}
export declare class ConfirmConnectionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    confirmConnectionResponse?: shared.ConfirmConnectionResponse;
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
}
