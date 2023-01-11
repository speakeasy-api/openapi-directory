import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePushDeviceDetailsQueryParams extends SpeakeasyBase {
    channel?: string;
    clientId?: string;
    deviceId?: string;
    format?: shared.ResponseFormatEnum;
}
export declare class DeletePushDeviceDetailsHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class DeletePushDeviceDetailsRequest extends SpeakeasyBase {
    queryParams: DeletePushDeviceDetailsQueryParams;
    headers: DeletePushDeviceDetailsHeaders;
}
export declare class DeletePushDeviceDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
