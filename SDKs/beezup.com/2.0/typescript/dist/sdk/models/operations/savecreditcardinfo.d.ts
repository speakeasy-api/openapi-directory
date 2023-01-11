import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveCreditCardInfoRequest extends SpeakeasyBase {
    request: shared.CreditCardInfo;
}
export declare class SaveCreditCardInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
