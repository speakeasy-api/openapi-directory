import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicLovIndexHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetPublicLovIndexRequest extends SpeakeasyBase {
    headers: GetPublicLovIndexHeaders;
}
export declare class GetPublicLovIndexResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    publicLovIndex?: shared.PublicLovIndex;
}
