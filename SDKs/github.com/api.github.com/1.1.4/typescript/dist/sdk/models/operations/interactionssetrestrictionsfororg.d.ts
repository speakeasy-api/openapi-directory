import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InteractionsSetRestrictionsForOrgRequest extends SpeakeasyBase {
    interactionLimit: shared.InteractionLimit;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class InteractionsSetRestrictionsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    interactionLimitResponse?: shared.InteractionLimitResponse;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
