import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAs2PartnersIdRequest extends SpeakeasyBase {
    /**
     * As2 Partner ID.
     */
    id: number;
}
export declare class GetAs2PartnersIdResponse extends SpeakeasyBase {
    /**
     * The As2Partners object.
     */
    as2PartnerEntity?: shared.As2PartnerEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
