import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutoConfigureAutoImportIntervalPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class AutoConfigureAutoImportIntervalRequest extends SpeakeasyBase {
    pathParams: AutoConfigureAutoImportIntervalPathParams;
    request: shared.ConfigureAutoImportIntervalRequest;
}
export declare class AutoConfigureAutoImportIntervalResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
