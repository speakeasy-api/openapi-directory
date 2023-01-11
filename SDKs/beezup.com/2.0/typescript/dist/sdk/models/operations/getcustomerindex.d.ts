import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomerIndexHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetCustomerIndexRequest extends SpeakeasyBase {
    headers: GetCustomerIndexHeaders;
}
export declare class GetCustomerIndexResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    customerIndex?: shared.CustomerIndex;
}
