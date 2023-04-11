import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DevicesListCsvFormatSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DevicesListCsvFormatRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the distribution group.
     */
    distributionGroupName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * multiple UDIDs which should be part of the resulting CSV.
     */
    udids?: string[];
    /**
     * when true, filters out provisioned devices
     */
    unprovisionedOnly?: boolean;
}
export declare enum DevicesListCsvFormat400TextCsvCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * <b>bad_request</b>: Devices information can only be requested for iOS apps.
 *
 * @remarks
 *
 */
export declare class DevicesListCsvFormat400TextCsv extends SpeakeasyBase {
    code: DevicesListCsvFormat400TextCsvCodeEnum;
    message: string;
}
export declare class DevicesListCsvFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
