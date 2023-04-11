import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A preference indicating a choice to use 63bit/32bit IDs for all applicable resources.
 */
export declare enum PutAccountPreferencesRequestBodyResourceIdTypeEnum {
    LongId = "LONG_ID",
    ShortId = "SHORT_ID"
}
export declare class PutAccountPreferencesRequestBody extends SpeakeasyBase {
    /**
     * A preference indicating a choice to use 63bit/32bit IDs for all applicable resources.
     */
    resourceIdType: PutAccountPreferencesRequestBodyResourceIdTypeEnum;
}
export declare class PutAccountPreferencesRequest extends SpeakeasyBase {
    requestBody: PutAccountPreferencesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutAccountPreferencesResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    putAccountPreferencesResponse?: shared.PutAccountPreferencesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
