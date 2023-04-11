import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateStoreResponse extends SpeakeasyBase {
    /**
     * The customer has a store with the same name
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The maximum amount of store has been reached. Please upgrade your contract.
     */
    errorResponseMessagePaymentRequired?: shared.ErrorResponseMessagePaymentRequired;
    /**
     * The store has been created successfully. The http header Location contains the new resource url. The body contains the link to the new resource.
     */
    linksGetStoreLink?: shared.LinksGetStoreLink;
}
