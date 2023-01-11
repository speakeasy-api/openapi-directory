import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsErc20AddressPathParams extends SpeakeasyBase {
    address: string;
}
export declare class OptionsErc20AddressRequest extends SpeakeasyBase {
    pathParams: OptionsErc20AddressPathParams;
}
export declare class OptionsErc20AddressResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
