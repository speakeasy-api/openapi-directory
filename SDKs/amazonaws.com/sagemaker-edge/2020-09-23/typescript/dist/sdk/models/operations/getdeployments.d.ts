import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDeploymentsRequestBody extends SpeakeasyBase {
    /**
     * The name of the fleet that the device belongs to.
     */
    deviceFleetName: string;
    /**
     * The unique name of the device you want to get the configuration of active deployments from.
     */
    deviceName: string;
}
export declare class GetDeploymentsRequest extends SpeakeasyBase {
    requestBody: GetDeploymentsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeploymentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDeploymentsResult?: shared.GetDeploymentsResult;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
