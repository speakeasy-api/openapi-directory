import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPushDeviceDetailsPathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class GetPushDeviceDetailsQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class GetPushDeviceDetailsHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetPushDeviceDetailsRequest extends SpeakeasyBase {
    pathParams: GetPushDeviceDetailsPathParams;
    queryParams: GetPushDeviceDetailsQueryParams;
    headers: GetPushDeviceDetailsHeaders;
}
export declare class GetPushDeviceDetailsResponseOutput extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deviceDetails?: shared.DeviceDetailsOutput;
    error?: shared.ErrorT;
    statusCode: number;
}
