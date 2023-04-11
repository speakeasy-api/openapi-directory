import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchAssociateClientDeviceWithCoreDeviceRequestBody extends SpeakeasyBase {
    /**
     * The list of client devices to associate.
     */
    entries?: shared.AssociateClientDeviceWithCoreDeviceEntry[];
}
export declare class BatchAssociateClientDeviceWithCoreDeviceRequest extends SpeakeasyBase {
    requestBody: BatchAssociateClientDeviceWithCoreDeviceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the core device. This is also the name of the IoT thing.
     */
    coreDeviceThingName: string;
}
export declare class BatchAssociateClientDeviceWithCoreDeviceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchAssociateClientDeviceWithCoreDeviceResponse?: shared.BatchAssociateClientDeviceWithCoreDeviceResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
