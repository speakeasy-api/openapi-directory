import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationTechnicalProgressionRequest extends SpeakeasyBase {
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationTechnicalProgressionResponse extends SpeakeasyBase {
    /**
     * Occurs when a user tries to work on the wrong store.
     *
     * @remarks
     * Occurs when the message concerns the wrong execution.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * When the technical progression is correctly retrived
     */
    importationTechnicalProgression?: shared.ImportationTechnicalProgression;
}
