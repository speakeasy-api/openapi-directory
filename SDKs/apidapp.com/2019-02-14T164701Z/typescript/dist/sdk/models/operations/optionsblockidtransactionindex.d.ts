import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsBlockIdTransactionIndexPathParams extends SpeakeasyBase {
    id: string;
    index: string;
}
export declare class OptionsBlockIdTransactionIndexRequest extends SpeakeasyBase {
    pathParams: OptionsBlockIdTransactionIndexPathParams;
}
export declare class OptionsBlockIdTransactionIndexResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
