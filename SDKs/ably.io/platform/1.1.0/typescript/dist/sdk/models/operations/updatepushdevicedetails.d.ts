import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePushDeviceDetailsPathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class UpdatePushDeviceDetailsQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class UpdatePushDeviceDetailsHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class UpdatePushDeviceDetailsRequest extends SpeakeasyBase {
    pathParams: UpdatePushDeviceDetailsPathParams;
    queryParams: UpdatePushDeviceDetailsQueryParams;
    headers: UpdatePushDeviceDetailsHeaders;
}
export declare class UpdatePushDeviceDetailsResponseOutput extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deviceDetails?: shared.DeviceDetailsOutput;
    error?: shared.ErrorT;
    statusCode: number;
}
