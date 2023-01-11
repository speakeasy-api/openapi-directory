import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an HTTP request.
**/
export declare class Http extends SpeakeasyBase {
    clientIp?: string;
    httpMethod?: string;
    httpStatus?: number;
    httpURL?: string;
    userAgent?: string;
}
