import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonListOfValueItem } from "./beezupcommonlistofvalueitem";
import { PublicListOfValuesResponseLinks } from "./publiclistofvaluesresponselinks";
/**
 * The list of values
 */
export declare class PublicListOfValuesResponse extends SpeakeasyBase {
    items?: BeezUPCommonListOfValueItem[];
    links?: PublicListOfValuesResponseLinks;
}
