import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinksPercentilesPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare class GetLinksPercentilesRequest extends SpeakeasyBase {
    pathParams: GetLinksPercentilesPathParams;
}
export declare class GetLinksPercentilesResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    linksPercentiles?: shared.LinksPercentiles;
    statusCode: number;
}
