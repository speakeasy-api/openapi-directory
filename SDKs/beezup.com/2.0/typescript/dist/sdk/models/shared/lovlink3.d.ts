import { SpeakeasyBase } from "../../../internal/utils";
import { HttpMethodEnum } from "./httpmethodenum";
/**
 * Describe the way you have to follow to get access to the LOV
 */
export declare class LOVLink3 extends SpeakeasyBase {
    /**
     * Indicate the uri to the list of value
     */
    href: string;
    /**
     * Indicate the http method to use on this link
     */
    method?: HttpMethodEnum;
}
