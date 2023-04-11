import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AutoGetAutoImportConfigurationRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class AutoGetAutoImportConfigurationResponse extends SpeakeasyBase {
    /**
     * StoreId or Auto Import configuration not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Auto import configuration
     */
    autoImportConfiguration?: shared.AutoImportConfiguration;
}
