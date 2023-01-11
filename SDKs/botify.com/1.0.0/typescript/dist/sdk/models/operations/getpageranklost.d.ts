import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPageRankLostPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare class GetPageRankLostRequest extends SpeakeasyBase {
    pathParams: GetPageRankLostPathParams;
}
export declare class GetPageRankLostResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    pageRankLost?: shared.PageRankLost;
    statusCode: number;
}
