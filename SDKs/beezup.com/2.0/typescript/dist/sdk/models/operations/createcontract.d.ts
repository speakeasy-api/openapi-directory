import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateContractRequest extends SpeakeasyBase {
    request: shared.OfferRequest;
}
export declare class CreateContractResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    createContractResponse?: shared.CreateContractResponse;
}
