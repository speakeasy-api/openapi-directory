import { SpeakeasyBase } from "../../../internal/utils";
import { ImportationReporting } from "./importationreporting";
import { ImportationsResponseLinks } from "./importationsresponselinks";
/**
 * The last importation reportings
 */
export declare class ImportationsResponse extends SpeakeasyBase {
    importations?: ImportationReporting[];
    links?: ImportationsResponseLinks;
}
