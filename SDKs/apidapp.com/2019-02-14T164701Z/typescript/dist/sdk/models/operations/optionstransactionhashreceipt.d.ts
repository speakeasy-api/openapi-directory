import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsTransactionHashReceiptPathParams extends SpeakeasyBase {
    hash: string;
}
export declare class OptionsTransactionHashReceiptRequest extends SpeakeasyBase {
    pathParams: OptionsTransactionHashReceiptPathParams;
}
export declare class OptionsTransactionHashReceiptResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
