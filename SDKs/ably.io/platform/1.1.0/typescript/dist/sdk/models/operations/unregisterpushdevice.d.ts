import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnregisterPushDevicePathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class UnregisterPushDeviceQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class UnregisterPushDeviceHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class UnregisterPushDeviceRequest extends SpeakeasyBase {
    pathParams: UnregisterPushDevicePathParams;
    queryParams: UnregisterPushDeviceQueryParams;
    headers: UnregisterPushDeviceHeaders;
}
export declare class UnregisterPushDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
