import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutoGetAutoImportConfigurationPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class AutoGetAutoImportConfigurationRequest extends SpeakeasyBase {
    pathParams: AutoGetAutoImportConfigurationPathParams;
}
export declare class AutoGetAutoImportConfigurationResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    autoImportConfiguration?: shared.AutoImportConfiguration;
}
