import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductTypesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultOwnerTypeDto?: shared.PageResultOwnerTypeDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
