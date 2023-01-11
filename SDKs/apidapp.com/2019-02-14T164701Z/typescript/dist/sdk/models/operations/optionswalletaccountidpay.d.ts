import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsWalletAccountIdPayPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsWalletAccountIdPayRequest extends SpeakeasyBase {
    pathParams: OptionsWalletAccountIdPayPathParams;
}
export declare class OptionsWalletAccountIdPayResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
