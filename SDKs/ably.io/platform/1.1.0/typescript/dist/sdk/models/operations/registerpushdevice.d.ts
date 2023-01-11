import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterPushDeviceQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class RegisterPushDeviceHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class RegisterPushDeviceRequestsInput extends SpeakeasyBase {
    applicationXMsgpack: Uint8Array;
    deviceDetails?: shared.DeviceDetailsInput;
}
export declare class RegisterPushDeviceRequest extends SpeakeasyBase {
    queryParams: RegisterPushDeviceQueryParams;
    headers: RegisterPushDeviceHeaders;
    request?: RegisterPushDeviceRequestsInput;
}
export declare class RegisterPushDeviceResponseOutput extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deviceDetails?: shared.DeviceDetailsOutput;
    error?: shared.ErrorT;
    statusCode: number;
}
