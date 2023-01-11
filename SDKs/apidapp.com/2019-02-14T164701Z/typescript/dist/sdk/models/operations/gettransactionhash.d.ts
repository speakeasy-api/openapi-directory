import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionHashPathParams extends SpeakeasyBase {
    hash: string;
}
export declare class GetTransactionHashSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetTransactionHashRequest extends SpeakeasyBase {
    pathParams: GetTransactionHashPathParams;
    security: GetTransactionHashSecurity;
}
export declare class GetTransactionHashResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
