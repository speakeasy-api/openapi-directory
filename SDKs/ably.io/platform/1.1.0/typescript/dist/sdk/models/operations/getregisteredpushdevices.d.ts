import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRegisteredPushDevicesQueryParams extends SpeakeasyBase {
    clientId?: string;
    deviceId?: string;
    format?: shared.ResponseFormatEnum;
    limit?: number;
}
export declare class GetRegisteredPushDevicesHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetRegisteredPushDevicesRequest extends SpeakeasyBase {
    queryParams: GetRegisteredPushDevicesQueryParams;
    headers: GetRegisteredPushDevicesHeaders;
}
export declare class GetRegisteredPushDevicesResponseOutput extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deviceDetails?: shared.DeviceDetailsOutput;
    error?: shared.ErrorT;
    statusCode: number;
}
