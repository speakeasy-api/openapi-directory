import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStandardOffersHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStandardOffersRequest extends SpeakeasyBase {
    headers: GetStandardOffersHeaders;
}
export declare class GetStandardOffersResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    standardOffers?: shared.StandardOffers;
}
