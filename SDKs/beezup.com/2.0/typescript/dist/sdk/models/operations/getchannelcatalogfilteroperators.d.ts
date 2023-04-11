import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelCatalogFilterOperatorsResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Channel catalog  filter operator list
     */
    filterOperators?: shared.FilterOperator[];
}
