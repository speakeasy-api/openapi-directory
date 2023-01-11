import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsBlockIdTransactionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsBlockIdTransactionRequest extends SpeakeasyBase {
    pathParams: OptionsBlockIdTransactionPathParams;
}
export declare class OptionsBlockIdTransactionResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
