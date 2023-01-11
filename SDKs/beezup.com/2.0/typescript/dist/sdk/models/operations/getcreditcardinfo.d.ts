import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCreditCardInfoHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetCreditCardInfoRequest extends SpeakeasyBase {
    headers: GetCreditCardInfoHeaders;
}
export declare class GetCreditCardInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    creditCardInfoResponse?: shared.CreditCardInfoResponse;
}
