import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDevicesInPlacementRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the placement to get the devices from.
     */
    placementName: string;
    /**
     * The name of the project containing the placement.
     */
    projectName: string;
}
export declare class GetDevicesInPlacementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDevicesInPlacementResponse?: shared.GetDevicesInPlacementResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
