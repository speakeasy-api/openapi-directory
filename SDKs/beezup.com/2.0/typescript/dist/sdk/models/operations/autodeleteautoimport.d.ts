import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutoDeleteAutoImportPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class AutoDeleteAutoImportRequest extends SpeakeasyBase {
    pathParams: AutoDeleteAutoImportPathParams;
}
export declare class AutoDeleteAutoImportResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
