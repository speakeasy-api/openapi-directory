import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
 *
 * @remarks
 *
 */
export declare class Meta extends SpeakeasyBase {
    /**
     * HTTP Response Message
     */
    msg?: string;
    /**
     * A unique ID paired with this response from the API.
     */
    responseId?: string;
    /**
     * HTTP Response Code
     */
    status?: number;
}
