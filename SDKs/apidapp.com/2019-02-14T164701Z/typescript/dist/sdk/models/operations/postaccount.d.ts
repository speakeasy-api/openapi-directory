import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class PostAccountRequest extends SpeakeasyBase {
    security: PostAccountSecurity;
}
export declare class PostAccountResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
