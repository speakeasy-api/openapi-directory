import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateConnectivityInfoRequestBody extends SpeakeasyBase {
    /**
     * The connectivity information for the core device.
     */
    connectivityInfo: shared.ConnectivityInfo[];
}
export declare class UpdateConnectivityInfoRequest extends SpeakeasyBase {
    requestBody: UpdateConnectivityInfoRequestBody;
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
    thingName: string;
}
export declare class UpdateConnectivityInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateConnectivityInfoResponse?: shared.UpdateConnectivityInfoResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
