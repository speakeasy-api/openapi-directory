import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisassociateDeviceFromPlacementRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The device ID that should be removed from the placement.
     */
    deviceTemplateName: string;
    /**
     * The name of the placement that the device should be removed from.
     */
    placementName: string;
    /**
     * The name of the project that contains the placement.
     */
    projectName: string;
}
export declare class DisassociateDeviceFromPlacementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateDeviceFromPlacementResponse?: Record<string, any>;
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
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
