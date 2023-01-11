import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnregisterAllPushDevicesQueryParams extends SpeakeasyBase {
    clientId?: string;
    deviceId?: string;
    format?: shared.ResponseFormatEnum;
}
export declare class UnregisterAllPushDevicesHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class UnregisterAllPushDevicesRequest extends SpeakeasyBase {
    queryParams: UnregisterAllPushDevicesQueryParams;
    headers: UnregisterAllPushDevicesHeaders;
}
export declare class UnregisterAllPushDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
