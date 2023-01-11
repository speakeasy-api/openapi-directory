import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutoResumeAutoImportPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class AutoResumeAutoImportRequest extends SpeakeasyBase {
    pathParams: AutoResumeAutoImportPathParams;
}
export declare class AutoResumeAutoImportResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
