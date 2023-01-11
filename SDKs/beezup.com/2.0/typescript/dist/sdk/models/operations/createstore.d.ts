import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStoreRequest extends SpeakeasyBase {
    request: shared.CreateStoreRequest;
}
export declare class CreateStoreResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessagePaymentRequired?: shared.ErrorResponseMessagePaymentRequired;
    linksGetStoreLink?: shared.LinksGetStoreLink;
}
