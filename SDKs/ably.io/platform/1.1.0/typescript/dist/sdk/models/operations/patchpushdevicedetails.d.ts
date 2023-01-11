import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchPushDeviceDetailsPathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class PatchPushDeviceDetailsQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class PatchPushDeviceDetailsHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class PatchPushDeviceDetailsRequestsInput extends SpeakeasyBase {
    applicationXMsgpack: Uint8Array;
    deviceDetails?: shared.DeviceDetailsInput;
    deviceDetails1?: shared.DeviceDetailsInput;
}
export declare class PatchPushDeviceDetailsRequest extends SpeakeasyBase {
    pathParams: PatchPushDeviceDetailsPathParams;
    queryParams: PatchPushDeviceDetailsQueryParams;
    headers: PatchPushDeviceDetailsHeaders;
    request?: PatchPushDeviceDetailsRequestsInput;
}
export declare class PatchPushDeviceDetailsResponseOutput extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deviceDetails?: shared.DeviceDetailsOutput;
    error?: shared.ErrorT;
    statusCode: number;
}
