import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssociateDeviceWithPlacementRequestBody extends SpeakeasyBase {
    /**
     * The ID of the physical device to be associated with the given placement in the project. Note that a mandatory 4 character prefix is required for all <code>deviceId</code> values.
     */
    deviceId: string;
}
export declare class AssociateDeviceWithPlacementRequest extends SpeakeasyBase {
    requestBody: AssociateDeviceWithPlacementRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The device template name to associate with the device ID.
     */
    deviceTemplateName: string;
    /**
     * The name of the placement in which to associate the device.
     */
    placementName: string;
    /**
     * The name of the project containing the placement in which to associate the device.
     */
    projectName: string;
}
export declare class AssociateDeviceWithPlacementResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateDeviceWithPlacementResponse?: Record<string, any>;
    contentType: string;
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
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
