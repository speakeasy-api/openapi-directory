import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryListApisRequest extends SpeakeasyBase {
    /**
     * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
     */
    filter?: string;
    /**
     * The location id.
     */
    location: string;
    /**
     * The maximum number of APIs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApis` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * The project id.
     */
    project: string;
}
export declare class RegistryListApisResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listApisResponse?: shared.ListApisResponse;
    /**
     * Default error response
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
