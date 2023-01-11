import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsKeyKeyPathParams extends SpeakeasyBase {
    key: string;
}
export declare class OptionsKeyKeyRequest extends SpeakeasyBase {
    pathParams: OptionsKeyKeyPathParams;
}
export declare class OptionsKeyKeyResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
