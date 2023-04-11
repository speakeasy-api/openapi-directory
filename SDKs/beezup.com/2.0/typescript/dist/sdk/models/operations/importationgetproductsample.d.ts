import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationGetProductSampleRequest extends SpeakeasyBase {
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Index of the product sample. Starting from 0 to 99.
     */
    productSampleIndex: number;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationGetProductSampleResponse extends SpeakeasyBase {
    /**
     * Catalog preparation read step is not completed. Please refer to the reporting of this execution for more details.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    productSample?: shared.ProductSample;
}
