import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationMapCustomColumnPathParams extends SpeakeasyBase {
    columnId: string;
    executionId: string;
    storeId: string;
}
export declare class ImportationMapCustomColumnRequest extends SpeakeasyBase {
    pathParams: ImportationMapCustomColumnPathParams;
    request: shared.MapBeezUpColumnRequest;
}
export declare class ImportationMapCustomColumnResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
