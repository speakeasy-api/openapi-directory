import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBlockchainSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetBlockchainRequest extends SpeakeasyBase {
    security: GetBlockchainSecurity;
}
export declare class GetBlockchainResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
