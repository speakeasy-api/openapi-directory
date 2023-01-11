import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationCommitColumnsPathParams extends SpeakeasyBase {
    executionId: string;
    storeId: string;
}
export declare class ImportationCommitColumnsRequest extends SpeakeasyBase {
    pathParams: ImportationCommitColumnsPathParams;
}
export declare class ImportationCommitColumnsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
