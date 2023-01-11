import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderIndexHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetOrderIndexRequest extends SpeakeasyBase {
    headers: GetOrderIndexHeaders;
}
export declare class GetOrderIndexResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    orderIndex?: shared.OrderIndex;
}
