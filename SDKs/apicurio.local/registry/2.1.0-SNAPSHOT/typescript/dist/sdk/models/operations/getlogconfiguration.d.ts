import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLogConfigurationPathParams extends SpeakeasyBase {
    logger: string;
}
export declare class GetLogConfigurationRequest extends SpeakeasyBase {
    pathParams: GetLogConfigurationPathParams;
}
export declare class GetLogConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    namedLogConfiguration?: shared.NamedLogConfiguration;
    statusCode: number;
}
