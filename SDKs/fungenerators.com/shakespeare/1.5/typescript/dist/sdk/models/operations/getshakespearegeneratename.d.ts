import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetShakespeareGenerateNameSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetShakespeareGenerateNameRequest extends SpeakeasyBase {
    /**
     * No of names to generate
     */
    limit?: number;
    /**
     * Variation to generate `male/female`.
     */
    variation?: string;
}
export declare class GetShakespeareGenerateNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
