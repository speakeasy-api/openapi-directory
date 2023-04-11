import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLagXAmzTargetEnum {
    OvertureServiceDeleteLag = "OvertureService.DeleteLag"
}
export declare class DeleteLagRequest extends SpeakeasyBase {
    deleteLagRequest: shared.DeleteLagRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLagXAmzTargetEnum;
}
export declare class DeleteLagResponse extends SpeakeasyBase {
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
     * Success
     */
    lag?: shared.Lag;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
