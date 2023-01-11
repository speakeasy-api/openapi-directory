import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonListOfValueItem } from "./beezupcommonlistofvalueitem";
import { PublicListOfValuesResponseLinks } from "./publiclistofvaluesresponselinks";
export declare class PublicListOfValuesResponse extends SpeakeasyBase {
    items?: BeezUpCommonListOfValueItem[];
    links?: PublicListOfValuesResponseLinks;
}
