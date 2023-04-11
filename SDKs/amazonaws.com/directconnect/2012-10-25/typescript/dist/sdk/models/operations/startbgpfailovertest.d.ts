import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartBgpFailoverTestXAmzTargetEnum {
    OvertureServiceStartBgpFailoverTest = "OvertureService.StartBgpFailoverTest"
}
export declare class StartBgpFailoverTestRequest extends SpeakeasyBase {
    startBgpFailoverTestRequest: shared.StartBgpFailoverTestRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartBgpFailoverTestXAmzTargetEnum;
}
export declare class StartBgpFailoverTestResponse extends SpeakeasyBase {
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
    startBgpFailoverTestResponse?: shared.StartBgpFailoverTestResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
