import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryListArtifactsRequest extends SpeakeasyBase {
    /**
     * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
     */
    filter?: string;
    /**
     * The location id.
     */
    location: string;
    /**
     * The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * The project id.
     */
    project: string;
}
export declare class RegistryListArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listArtifactsResponse?: shared.ListArtifactsResponse;
    /**
     * Default error response
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
