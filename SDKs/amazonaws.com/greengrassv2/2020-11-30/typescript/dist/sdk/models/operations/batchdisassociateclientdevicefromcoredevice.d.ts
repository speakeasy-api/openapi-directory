import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDisassociateClientDeviceFromCoreDeviceRequestBody extends SpeakeasyBase {
    /**
     * The list of client devices to disassociate.
     */
    entries?: shared.DisassociateClientDeviceFromCoreDeviceEntry[];
}
export declare class BatchDisassociateClientDeviceFromCoreDeviceRequest extends SpeakeasyBase {
    requestBody: BatchDisassociateClientDeviceFromCoreDeviceRequestBody;
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
export declare class BatchDisassociateClientDeviceFromCoreDeviceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchDisassociateClientDeviceFromCoreDeviceResponse?: shared.BatchDisassociateClientDeviceFromCoreDeviceResponse;
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
