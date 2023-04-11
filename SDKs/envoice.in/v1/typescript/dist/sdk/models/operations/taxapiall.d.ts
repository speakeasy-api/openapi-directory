import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaxApiAllRequest extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taxDetailsApiModels?: shared.TaxDetailsApiModel[];
}
