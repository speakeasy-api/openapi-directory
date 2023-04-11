import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartConnectionRequestBody extends SpeakeasyBase {
    /**
     *  The ID of the Outpost server.
     */
    assetId: string;
    /**
     *  The public key of the client.
     */
    clientPublicKey: string;
    /**
     *  The serial number of the dongle.
     */
    deviceSerialNumber: string;
    /**
     *  The device index of the network interface on the Outpost server.
     */
    networkInterfaceDeviceIndex: number;
}
export declare class StartConnectionRequest extends SpeakeasyBase {
    requestBody: StartConnectionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartConnectionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    startConnectionResponse?: shared.StartConnectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
