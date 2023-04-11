import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"
 */
export declare enum DomainsCountTypeEnum {
    System = "system",
    Go = "go",
    Personal = "personal",
    Dedicated = "dedicated"
}
export declare class DomainsCountRequest extends SpeakeasyBase {
    /**
     * Filter domains with this anmen
     */
    name?: string;
    /**
     * Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"
     */
    type?: DomainsCountTypeEnum;
}
export declare class DomainsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
