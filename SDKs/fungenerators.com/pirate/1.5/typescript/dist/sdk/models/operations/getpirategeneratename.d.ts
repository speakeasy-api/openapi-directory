import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPirateGenerateNameSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetPirateGenerateNameRequest extends SpeakeasyBase {
    /**
     * No of names to generate
     */
    limit?: number;
    /**
     * Variation to generate `male/female`.
     */
    variation?: string;
}
export declare class GetPirateGenerateNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
