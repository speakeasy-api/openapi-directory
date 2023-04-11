import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostConfigApacheHttpComponentsProxyConfigurationRequest extends SpeakeasyBase {
    proxyEnabled?: boolean;
    proxyEnabledAtTypeHint?: string;
    proxyExceptions?: string[];
    proxyExceptionsAtTypeHint?: string;
    proxyHost?: string;
    proxyHostAtTypeHint?: string;
    proxyPassword?: string;
    proxyPasswordAtTypeHint?: string;
    proxyPort?: number;
    proxyPortAtTypeHint?: string;
    proxyUser?: string;
    proxyUserAtTypeHint?: string;
}
export declare class PostConfigApacheHttpComponentsProxyConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
