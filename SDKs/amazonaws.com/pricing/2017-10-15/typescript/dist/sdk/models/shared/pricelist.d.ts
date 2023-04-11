import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This is the type of price list references that match your request. </p>
 */
export declare class PriceList extends SpeakeasyBase {
    currencyCode?: string;
    fileFormats?: string[];
    priceListArn?: string;
    regionCode?: string;
}
