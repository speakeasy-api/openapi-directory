import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopBgpFailoverTestXAmzTargetEnum {
    OvertureServiceStopBgpFailoverTest = "OvertureService.StopBgpFailoverTest"
}
export declare class StopBgpFailoverTestRequest extends SpeakeasyBase {
    stopBgpFailoverTestRequest: shared.StopBgpFailoverTestRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopBgpFailoverTestXAmzTargetEnum;
}
export declare class StopBgpFailoverTestResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    stopBgpFailoverTestResponse?: shared.StopBgpFailoverTestResponse;
}
