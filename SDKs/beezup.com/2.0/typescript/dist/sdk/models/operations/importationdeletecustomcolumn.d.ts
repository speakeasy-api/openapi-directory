import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationDeleteCustomColumnRequest extends SpeakeasyBase {
    /**
     * The custom column identifier
     */
    columnId: string;
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationDeleteCustomColumnResponse extends SpeakeasyBase {
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
}
