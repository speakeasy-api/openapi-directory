import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PrepareTransactionRequestBodyVariationEnum {
    Gsb = "gsb",
    Erzeugung = "erzeugung",
    Eigenstrom = "eigenstrom",
    Co2 = "co2",
    Baeume = "baeume"
}
export declare class PrepareTransactionRequestBody extends SpeakeasyBase {
    /**
     * Stromkonto account address of sender
     */
    account?: string;
    /**
     * Signature per Stromkonto setting (might be simple email confirmation link)
     */
    signature?: string;
    /**
     * Stromkonto account address of reciever
     */
    to?: string;
    /**
     * Amount to transfer (in Watthours for electricity, or pcs for trees)
     */
    value?: number;
    variation?: PrepareTransactionRequestBodyVariationEnum;
}
export declare class PrepareTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
