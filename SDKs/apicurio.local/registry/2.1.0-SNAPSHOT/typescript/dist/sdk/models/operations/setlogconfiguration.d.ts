import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetLogConfigurationPathParams extends SpeakeasyBase {
    logger: string;
}
export declare class SetLogConfigurationRequest extends SpeakeasyBase {
    pathParams: SetLogConfigurationPathParams;
    request: shared.LogConfiguration;
}
export declare class SetLogConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    namedLogConfiguration?: shared.NamedLogConfiguration;
    statusCode: number;
}
