import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConversionsConversionIdRequest extends SpeakeasyBase {
    /**
     * Id of the conversion
     */
    conversionId: number;
}
export declare class GetConversionsConversionIdResponse extends SpeakeasyBase {
    apiCoreDtoConversionsConversion?: shared.ApiCoreDtoConversionsConversion;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
