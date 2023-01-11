import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveLogConfigurationPathParams extends SpeakeasyBase {
    logger: string;
}
export declare class RemoveLogConfigurationRequest extends SpeakeasyBase {
    pathParams: RemoveLogConfigurationPathParams;
}
export declare class RemoveLogConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    namedLogConfiguration?: shared.NamedLogConfiguration;
    statusCode: number;
}
