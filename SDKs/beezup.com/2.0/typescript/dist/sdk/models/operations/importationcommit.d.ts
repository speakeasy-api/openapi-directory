import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationCommitPathParams extends SpeakeasyBase {
    executionId: string;
    storeId: string;
}
export declare class ImportationCommitRequest extends SpeakeasyBase {
    pathParams: ImportationCommitPathParams;
}
export declare class ImportationCommitResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
