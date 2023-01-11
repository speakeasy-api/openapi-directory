import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationTechnicalProgressionPathParams extends SpeakeasyBase {
    executionId: string;
    storeId: string;
}
export declare class ImportationTechnicalProgressionRequest extends SpeakeasyBase {
    pathParams: ImportationTechnicalProgressionPathParams;
}
export declare class ImportationTechnicalProgressionResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    importationTechnicalProgression?: shared.ImportationTechnicalProgression;
}
