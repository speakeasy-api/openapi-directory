import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContractsHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetContractsRequest extends SpeakeasyBase {
    headers: GetContractsHeaders;
}
export declare class GetContractsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    contracts?: shared.Contracts;
}
