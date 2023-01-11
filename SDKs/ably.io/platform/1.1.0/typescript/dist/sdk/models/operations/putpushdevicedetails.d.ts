import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPushDeviceDetailsPathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class PutPushDeviceDetailsQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class PutPushDeviceDetailsHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class PutPushDeviceDetailsRequestsInput extends SpeakeasyBase {
    applicationXMsgpack: Uint8Array;
    deviceDetails?: shared.DeviceDetailsInput;
    deviceDetails1?: shared.DeviceDetailsInput;
}
export declare class PutPushDeviceDetailsRequest extends SpeakeasyBase {
    pathParams: PutPushDeviceDetailsPathParams;
    queryParams: PutPushDeviceDetailsQueryParams;
    headers: PutPushDeviceDetailsHeaders;
    request?: PutPushDeviceDetailsRequestsInput;
}
export declare class PutPushDeviceDetailsResponseOutput extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deviceDetails?: shared.DeviceDetailsOutput;
    error?: shared.ErrorT;
    statusCode: number;
}
