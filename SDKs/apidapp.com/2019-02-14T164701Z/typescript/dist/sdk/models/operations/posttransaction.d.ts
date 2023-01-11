import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTransactionSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class PostTransactionRequest extends SpeakeasyBase {
    security: PostTransactionSecurity;
}
export declare class PostTransactionResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
