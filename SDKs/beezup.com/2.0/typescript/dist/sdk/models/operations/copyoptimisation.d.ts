import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CopyOptimisationRequest extends SpeakeasyBase {
    copyOptimisationRequest: shared.CopyOptimisationRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CopyOptimisationResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Products optimisatisation copied
     */
    copyOptimisationResponse?: shared.CopyOptimisationResponse;
}
