import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUrlDetailPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    url: string;
    username: string;
}
export declare class GetUrlDetailQueryParams extends SpeakeasyBase {
    fields?: string[];
}
export declare class GetUrlDetailRequest extends SpeakeasyBase {
    pathParams: GetUrlDetailPathParams;
    queryParams: GetUrlDetailQueryParams;
}
export declare class GetUrlDetailResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    urlDetail?: Record<string, any>;
}
