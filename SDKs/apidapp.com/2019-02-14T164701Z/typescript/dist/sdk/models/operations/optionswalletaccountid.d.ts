import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsWalletAccountIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsWalletAccountIdRequest extends SpeakeasyBase {
    pathParams: OptionsWalletAccountIdPathParams;
}
export declare class OptionsWalletAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
