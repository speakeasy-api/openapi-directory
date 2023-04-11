import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLagXAmzTargetEnum {
    OvertureServiceUpdateLag = "OvertureService.UpdateLag"
}
export declare class UpdateLagRequest extends SpeakeasyBase {
    updateLagRequest: shared.UpdateLagRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLagXAmzTargetEnum;
}
export declare class UpdateLagResponse extends SpeakeasyBase {
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
