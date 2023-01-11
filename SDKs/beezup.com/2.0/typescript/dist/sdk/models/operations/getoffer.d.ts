import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferRequest extends SpeakeasyBase {
    request: shared.OfferRequest;
}
export declare class GetOfferResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    offer?: shared.Offer;
}
